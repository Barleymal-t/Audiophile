"use client";

import React, {
    createContext,
    useContext,
    useReducer,
    ReactNode,
    useEffect,
} from "react";

export interface CartItemData {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    items: CartItemData[];
}

interface CartContextType {
    state: CartState;
    addItem: (item: CartItemData) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getTotalCount: () => number;
}

const CartContext = createContext<CartContextType | null>(null);

type CartAction =
    | { type: "ADD_ITEM"; payload: CartItemData }
    | { type: "REMOVE_ITEM"; payload: number }
    | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
    | { type: "CLEAR_CART" }
    | { type: "SET_CART"; payload: CartItemData[] };

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "ADD_ITEM": {
            const exists = state.items.find((i) => i.id === action.payload.id);
            if (exists) {
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === action.payload.id
                            ? {
                                  ...item,
                                  quantity:
                                      item.quantity + action.payload.quantity,
                              }
                            : item
                    ),
                };
            }
            return { ...state, items: [...state.items, action.payload] };
        }
        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case "UPDATE_QUANTITY":
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        case "SET_CART":
            return { ...state, items: action.payload };
        case "CLEAR_CART":
            return { items: [] };
        default:
            return state;
    }
};

export const CartProvider = ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            try {
                const parsed = JSON.parse(storedCart);
                if (Array.isArray(parsed)) {
                    dispatch({ type: "SET_CART", payload: parsed });
                } else {
                    console.warn("Invalid cart data in localStorage.");
                }
            } catch {
                console.error("Failed to parse cart from localStorage");
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.items));
    }, [state.items]);

    const addItem = (item: CartItemData) =>
        dispatch({ type: "ADD_ITEM", payload: item });
    const removeItem = (id: number) =>
        dispatch({ type: "REMOVE_ITEM", payload: id });
    const updateQuantity = (id: number, quantity: number) =>
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    const clearCart = () => dispatch({ type: "CLEAR_CART" });
    const getTotalPrice = () =>
        state.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    const getTotalCount = ()=>state.items.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <CartContext
            value={{
                state,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                getTotalPrice,
                getTotalCount
            }}>
            {children}
        </CartContext>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used inside a CartProvider");
    return context;
};
