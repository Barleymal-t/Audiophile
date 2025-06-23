"use client"
import { Button } from "@/components/button";
import Navrow from "@/components/navrow";
import ResponsiveImage from "@/components/responsive-image";

export default function Home() {
    return (
        <div className="relative">
            <div className=" ">
                <div className="bg-black">
                    <main className="max-w-285 m-auto px-8 text-white flex py-34 bg-[url('/assets/home/mobile/image-header.jpg')]  sm:bg-[url('/assets/home/tablet/image-header.jpg')] lg:bg-[url('/assets/home/desktop/image-hero.jpg')] bg-center bg-contain bg-no-repeat">
                        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-7 h-full w-full">
                            <strong className="uppercase spacing tracking-[0.625rem] text-medium-gray font-medium">
                                New product
                            </strong>
                            <h1 className="text-4xl lg:text-6xl font-semibold uppercase max-w-96">
                                XX99 Mark II Headphones
                            </h1>
                            <p className="text-medium-gray font-extralight max-w-90">
                                Experience natural, lifelike audio and
                                exceptional build quality made for the
                                passionate music enthusiast.
                            </p>
                            <Button>see product</Button>
                        </div>
                        <div className="hidden  h-full w-full lg:block">
                            {/* <Image className="" src={Headphones} alt="Headphones"/> */}
                        </div>
                    </main>
                </div>
                <section className=" py-34">
                    <Navrow />
                </section>
                <section className="p-8 max-w-285 m-auto">
                    <div className="bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-[position:50%_-8.125rem] bg-contain lg:bg-[position:-15rem_-9.125rem] bg-no-repeat bg-orange rounded-lg m-auto px-8 text-white py-14 lg:pb-0 overflow-hidden">
                        <div className="flex flex-col items-center justify-center lg:-mb-6 gap-8 lg:gap-20 lg:flex-row lg:items-start">
                          <div className="basis-1/2">

                            <ResponsiveImage
                                alt="ZX9"
                                images={{
                                    mobile: "/assets/home/mobile/image-speaker-zx9.png",
                                    tablet: "/assets/home/tablet/image-speaker-zx9.png",
                                    desktop:
                                        "/assets/home/desktop/image-speaker-zx9.png",
                                }}
                                className="w-full"
                            />
                          </div>

                            <div className="flex basis-1/2 flex-col items-center lg:items-start justify-center text-center lg:text-left gap-7 h-full w-full">
                                <h1 className="text-6xl md:text-6xl sm:text-6xl font-semibold uppercase max-w-96 break-words">
                                    ZX9 Speaker
                                </h1>
                                <p className="text-medium text-white/80 font-extralight max-w-90">
                                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                                </p>
                                <Button variant="custom" className="font-semibold">see product</Button>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden my-16 flex">
                        <ResponsiveImage
                            alt="ZX7"
                            images={{
                                mobile: "/assets/home/mobile/image-speaker-zx7.jpg",
                                tablet: "/assets/home/tablet/image-speaker-zx7.jpg",
                                desktop:
                                    "/assets/home/desktop/image-speaker-zx7.jpg",
                            }}
                            className="w-full"
                        />
                        <div className="absolute top-1/2 left-1/4 translate-[-50%] flex flex-col justify-start items-start gap-8">
                            <h1 className=" text-2xl font-semibold uppercase max-w-96">
                                ZX7 Speaker
                            </h1>
                            <Button variant="secondary" className="font-semibold">see product</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <ResponsiveImage
                            alt="YX1"
                            images={{
                                mobile: "/assets/home/mobile/image-earphones-yx1.jpg",
                                tablet: "/assets/home/tablet/image-earphones-yx1.jpg",
                                desktop:
                                    "/assets/home/desktop/image-earphones-yx1.jpg",
                            }}
                            className="w-full rounded-lg"
                        />
                        <div className="py-8 rounded-lg bg-gray flex flex-col justify-center items-start pl-9 lg:pl-18 gap-8">
                            <h1 className=" text-2xl font-semibold uppercase max-w-96">
                                yx1 earphones
                            </h1>
                            <Button variant="secondary">see product</Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
