import Image from "next/image";
import React from "react";
import Counter from "./counter";
import { CartItemData, useCart } from "@/context/CartContext";

const CartItem = ({ item,display }: { item: CartItemData,display?:boolean }) => {
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
                        width={70}
                        height={70}
                        alt={item.name}
                        className="rounded-lg"
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-semibold uppercase">{item.name.toLowerCase().replace(item.category," ")}</p>
                        <p className="text-sm opacity-50 font-semibold tracking-wider">
                            {item.price.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                    minimumFractionDigits:0
                                })}
                        </p>
                    </div>
                </div>
                {/* right side counter  */}
                {
                    display?<p>x{item.quantity}</p>:
                    <Counter
                    id={item.id}
                    initialCount={item.quantity}
                    onCountChange={handleCountChange}
                    />
                }
            </div>
        </div>
    );
};

export default CartItem;
