import Image from "next/image";
import React from "react";
import Counter from "./counter";

const CartItem = () => {
    return (
        <div>
            {cartItemsData.map((item, index) => (
                <div
                    className="flex items-center justify-between mb-3"
                    key={index}>
                    {/* left side  */}
                    <div className="flex items-center justify-center space-x-3">
                        {/* image  */}
                        <Image
                            src={item.image.src}
                            width={item.image.width}
                            height={item.image.height}
                            alt={item.image.alt}
                            className="rounded-lg"
                        />
                        <div className="flex flex-col">
                            <p className="text-md font-semibold">{item.name}</p>
                            <p className="text-sm opacity-50 font-semibold tracking-wider">
                                $ {item.amount.toLocaleString()}
                            </p>
                        </div>
                    </div>
                    {/* right side counter  */}
                    <Counter
                        id={1}
                        onCountChange={() => {}}
                    />
                </div>
            ))}
        </div>
    );
};

export default CartItem;

export interface CartItemData {
    name: string;
    image: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
        className?: string;
    };
    amount: number;
}

export const cartItemsData: CartItemData[] = [
    {
        name: "XX99 MK II",
        image: {
            src: "/assets/cart/image-yx1-earphones.jpg",
            alt: "XX99 Mark II Headphones",
            width: 64,
            height: 64,
            className: "rounded-lg",
        },
        amount: 2999,
    },
    {
        name: "XX99 MK I",
        image: {
            src: "/assets/cart/image-yx1-earphones.jpg",
            alt: "XX99 Mark I Headphones",
            width: 64,
            height: 64,
            className: "rounded-lg",
        },
        amount: 1750,
    },
    {
        name: "ZX9 Speaker",
        image: {
            src: "/assets/cart/image-yx1-earphones.jpg",
            alt: "ZX9 Speaker",
            width: 64,
            height: 64,
            className: "rounded-lg",
        },
        amount: 4500,
    },
];
