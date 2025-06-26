"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { Product } from "@/models/product";
import ResponsiveImage from "./responsive-image";
import Counter from "./counter";
import { CartItemData, useCart } from "@/context/CartContext";

const PurchaseGrid = ({
    product,
}: {
    product: Product;
    showPrice?: boolean;
}) => {
    type NumberMap = {
        [key: number]: number;
    };
    const [counts, setCounts] = useState<NumberMap>({});

    const handleCountChange = (id: number, count: number) => {
        setCounts((prev) => ({
            ...prev,
            [id]: count,
        }));
    };
    const { addItem } = useCart();

    const addProduct = () => {
        const item: CartItemData = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: counts[product.id],
            category: product.category,
            image: `/assets/cart/image-${product.slug}.jpg`,
        };

        addItem(item);
    };

    return (
        <div className="max-w-285 mx-auto">
            <div className="flex gap-16 justify-center items-center flex-col sm:flex-row">
                <div className="basis-[40%] bg-gray w-full flex justify-center items-center rounded-lg">
                    <ResponsiveImage
                        alt="XX59 Headphones"
                        images={product.image}
                        className="w-full rounded-xl"
                    />
                </div>
                <div className="basis-[60%] w-full flex flex-col justify-center items-start gap-6">
                    {product.new && (
                        <h1 className="uppercase tracking-[0.625rem] text-orange">
                            new product
                        </h1>
                    )}
                    <h1 className="md:w-1/2 text-2xl font-bold tracking-[0.0625rem] uppercase">
                        {product.name}
                    </h1>
                    <p className="opacity-50 ">{product.description}</p>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold">${product.price}</h1>
                        <div className="flex gap-4">
                            <Counter
                                id={product.id}
                                onCountChange={handleCountChange}
                            />
                            <Button onClick={() => addProduct()}>
                                add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseGrid;
