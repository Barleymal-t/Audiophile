"use client";
import React from "react";
import Navlinks from "./navlinks";
import Logo from "@/public/assets/shared/desktop/logo.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Facebook from "@/public/assets/shared/desktop/icon-facebook.svg";
import Instagram from "@/public/assets/shared/desktop/icon-instagram.svg";
import Twitter from "@/public/assets/shared/desktop/icon-twitter.svg";

const Footer = () => {
    const router = useRouter();
    return (
        <footer className=" bg-dark-gray text-white ">
            <div className="flex flex-col gap-8 max-w-[1000px] m-auto py-16 px-8 relative">
                <div className="absolute h-1 w-22 bg-orange top-0 left-1/2 -translate-1/2 sm:translate-0 sm:left-8"></div>
                <div className="flex flex-col gap-8 md:flex-row items-center sm:items-start justify-between">
                    <Image
                        className="cursor-pointer"
                        onClick={() => router.push("/")}
                        src={Logo}
                        alt="logo"
                    />
                    <Navlinks />
                </div>
                <p className="opacity-50 text-center xs:text-start lg:max-w-1/2">
                    Audiophile is an all in one stop to fulfill your audio
                    needs. We&apos;re a small team of music lovers and sound
                    specialists who are devoted to helping you get the most out
                    of personal audio. Come and visit our demo facility - we’re
                    open 7 days a week.
                </p>
                <div className="flex flex-col gap-8 sm:flex-row items-center sm:items-start justify-between">
                    <p className="opacity-50 text-center xs:text-start">
                        Copyright {new Date().getFullYear()}. All Rights
                        Reserved
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com">
                            <Image
                                src={Facebook}
                                alt="Facebook"
                            />
                        </a>
                        <a href="https://www.twitter.com">
                            <Image
                                src={Twitter}
                                alt="Twitter"
                            />
                        </a>
                        <a href="https://www.instagram.com">
                            <Image
                                src={Instagram}
                                alt="Instagram"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
