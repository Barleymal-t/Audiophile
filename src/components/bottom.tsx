import React from "react";
import ResponsiveImage from "./responsive-image";

const Bottom = () => {
    return (
        <section className="my-16 p-8 max-w-285 m-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 [direction:rtl] gap-10">
                <ResponsiveImage
                    alt="Bestgear"
                    images={{
                        mobile: "/assets/shared/mobile/image-best-gear.jpg",
                        tablet: "/assets/shared/tablet/image-best-gear.jpg",
                        desktop: "/assets/shared/desktop/image-best-gear.jpg",
                    }}
                    className="rounded-lg w-full"
                />
                <div className="flex flex-col justify-center items-center mx-[5%] md:mx-[10%] lg:mx-0 text-center lg:text-left gap-10">
                    <h1 className=" text-[40px] font-semibold uppercase">
                        Bringing you the{" "}
                        <span className="text-orange">best</span> audio gear
                    </h1>
                    <p className="opacity-50">
                        Located at the heart of New York City, Audiophile is the
                        premier store for high end headphones, earphones,
                        speakers, and audio accessories. We have a large
                        showroom and luxury demonstration rooms available for
                        you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Bottom;
