import Image from "next/image";
import React from "react";
import Counter from "./counter";
import { CartItemData, useCart } from "@/context/CartContext";

const CartItem = ({ item }: { item: CartItemData }) => {
    const { removeItem, updateQuantity } = useCart();

    const handleCountChange = (id: number, count: number) => {
        if (count == 0) {
            removeItem(id);
        } else {
            updateQuantity(id, count);
        }
    };
    return (
        <div>
            <div className="flex items-center justify-between mb-3">
                {/* left side  */}
                <div className="flex items-center justify-center space-x-3">
                    {/* image  */}
                    <Image
                        src={item.image}
                        width={100}
                        height={100}
                        alt={item.name}
                        className="rounded-lg"
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-semibold">{item.name}</p>
                        <p className="text-sm opacity-50 font-semibold tracking-wider">
                            $ {item.price.toFixed(2)}
                        </p>
                    </div>
                </div>
                {/* right side counter  */}
                <Counter
                    id={item.id}
                    initialCount={item.quantity}
                    onCountChange={handleCountChange}
                />
            </div>
        </div>
    );
};

export default CartItem;
