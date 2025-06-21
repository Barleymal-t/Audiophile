import React from "react";
import Logo from "@/public/assets/shared/desktop/logo.svg";
import Cart from "@/public/assets/shared/desktop/icon-cart.svg";
import Menu from "@/public/assets/shared/tablet/icon-hamburger.svg";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className=" bg-[#191919]">
            <nav className="max-w-[1000px] m-auto px-8 text-white">
                <div className=" h-22 border-b-1 border-medium-gray flex items-center justify-between">
                    <div className="flex gap-8 items-center">
                        <Image
                            className="lg:hidden"
                            src={Menu}
                            alt="menu"
                        />
                        <Image
                            src={Logo}
                            alt="logo"
                        />
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex gap-8 font-semibold uppercase">
                            <li>home</li>
                            <li>headphones</li>
                            <li>speakers</li>
                            <li>earphones</li>
                        </ul>
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
