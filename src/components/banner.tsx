"use client";
import { usePathname } from "next/navigation";
import React from "react";
import DisplayGrid from "./displaygrid";
import products from "@/lib/data/data.json";
import Navrow from "./navrow";

const Banner = () => {
    const pathname = usePathname();

    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    return (
        <div className="flex flex-col">

        <div className="h-64 bg-black text-white flex items-center justify-center">
            <h1 className="text-5xl uppercase font-medium">{lastSegment}</h1>
        </div>
        <div className="flex flex-col">
        {products.filter(x=>x.category==lastSegment).map((product,index)=>(

      <DisplayGrid dir={index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} key={index} product={product}/>
        ))}
      </div>
      <div className="w-full mt-50 mb-30">

      <Navrow/>
      </div>
        </div>
    );
};

export default Banner;
