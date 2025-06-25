import React from "react";
import { ProductButton } from "./button";
import { Product } from "@/models/product";
import ResponsiveImage from "./responsive-image";

const DisplayGrid = ({ product, dir }: { product: Product; dir?: string }) => {
    return (
        <div className="max-w-285 mx-auto p-10">
            <div
                className={`flex gap-8 lg:gap-32 justify-center items-center flex-col ${
                    dir ? dir : "lg:flex-row"
                }`}>
                <div className="basis-[55%] bg-gray w-full flex justify-center items-center rounded-lg">
                    <ResponsiveImage
                        alt="XX59 Headphones"
                        images={product.categoryImage}
                        className="w-full h-auto rounded-xl"
                    />
                </div>
                <div className="basis-[45%] w-full flex flex-col justify-center items-center  lg:items-start gap-6">
                    {product.new && (
                        <h1 className="uppercase tracking-[0.625rem] text-orange">
                            new product
                        </h1>
                    )}
                    <h1 className="text-center lg:text-left uppercase max-w-[13ch] text-3xl font-bold tracking-[0.0625rem]">
                        {product.name}
                    </h1>
                    <p className="opacity-50 ">{product.description}</p>

                    <ProductButton
                        category={product.category}
                        slug={product.slug}
                    />
                </div>
            </div>
        </div>
    );
};

export default DisplayGrid;
