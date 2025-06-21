"use client"
import React from "react";
import Logo from "@/public/assets/shared/desktop/logo.svg";
import Cart from "@/public/assets/shared/desktop/icon-cart.svg";
import Menu from "@/public/assets/shared/tablet/icon-hamburger.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navlinks from "./navlinks";

const Navbar = () => {
    const router = useRouter();
    return (
        <header className=" bg-[#191919]">
            <nav className="max-w-[1000px] m-auto px-8 text-white">
                <div className=" h-22 border-b-1 border-b-[rgba(255,255,255,0.1)] flex items-center justify-between">
                        <Image
                            className="lg:hidden"
                            src={Menu}
                            alt="menu"
                        />
                        <Image
                        className="cursor-pointer"
                        onClick={()=>router.push("/")}
                            src={Logo}
                            alt="logo"
                        />
                    <div className="hidden lg:block">

                    <Navlinks/>
                    </div>
                    <div className="">
                        <Image
                            src={Cart}
                            alt="cart"
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
