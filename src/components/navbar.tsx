"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navlinks from "./navlinks";
import Navrow from "./navrow";
import { Cart } from "./cart";

const Navbar = () => {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className=" bg-black relative">
            
            <section
                
                className={`lg:hidden absolute top-full z-2 w-full rounded-b-lg transform transition-all duration-700 ease-in-out  ${
                    showMenu ? "translate-y-0 " : "-translate-y-[150%]"
                }`}>
                <Navrow />
            </section>

            <nav className="max-w-285 m-auto px-8 text-white">
                <div className=" h-22 border-b-1 border-b-[rgba(255,255,255,0.1)] flex items-center justify-between">
                    <div className="flex justify-between items-center gap-8">
                        <Image
                            onClick={() => setShowMenu(!showMenu)}
                            className="lg:hidden cursor-pointer"
                            src={
                                showMenu
                                    ? "/assets/shared/tablet/icon-close-menu.svg"
                                    : "/assets/shared/tablet/icon-hamburger.svg"
                            }
                            alt="menu"
                            height={18}
                            width={18}
                        />
                        <Image
                            className="cursor-pointer"
                            onClick={() => router.push("/")}
                            src="/assets/shared/desktop/logo.svg"
                            alt="logo"
                            height={150}
                            width={150}
                        />
                    </div>
                    <div className="hidden lg:block">
                        <Navlinks />
                    </div>
                    <Cart />
                </div>
            </nav>
            <div onClick={() => setShowMenu(false)} className={`z-1 bg-[rgba(0,0,0,0.5)] h-full w-full fixed inset-0 ${showMenu ? "translate-y-0 " : "-translate-y-[150%]"
                }`}/>
        </header>
    );
};

export default Navbar;
