import React from "react";
import { Button } from "./button";
import { Product } from "@/models/product";
import ResponsiveImage from "./responsive-image";

const DisplayGrid = ({
    product,
    dir,
}: {
    product: Product;
    dir?: string;
}) => {
    return (
        <div className="max-w-285 mx-auto p-10">
            <div
                className={`flex gap-32 justify-center items-center flex-col ${dir?dir:"md:flex-row"}`}>
                <div className="basis-[55%] bg-gray w-full flex justify-center items-center rounded-lg">
                    <ResponsiveImage
                        alt="XX59 Headphones"
                        images={product.categoryImage}
                        className="w-full h-auto rounded-xl"
                    />
                </div>
                <div className="basis-[45%] w-full flex flex-col justify-center items-start gap-6">
                    {product.new && (
                        <h1 className="uppercase tracking-[0.625rem] text-orange">
                            new product
                        </h1>
                    )}
                    <h1 className="md:w-1/2 text-2xl font-bold tracking-[0.0625rem]">
                        {product.name}
                    </h1>
                    <p className="opacity-50 ">{product.description}</p>
                    
                        <Button>see product</Button>
                </div>
            </div>
        </div>
    );
};

export default DisplayGrid;
