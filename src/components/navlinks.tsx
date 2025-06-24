import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navlinks = () => {
    const pathname = usePathname();
    const router = useRouter();

    const navItems = [
        { label: "home", path: "/" },
        { label: "headphones", path: "/headphones" },
        { label: "speakers", path: "/speakers" },
        { label: "earphones", path: "/earphones" },
    ];

    return (
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center  font-semibold uppercase  [&>*]:hover:text-orange [&>*]:cursor-pointer">
            {navItems.map(({ label, path }) => (
                <li
                    key={label}
                    onClick={() => router.push(path)}
                    className={clsx({
                        "text-orange": pathname.endsWith(path),
                    })}>
                    {label}
                </li>
            ))}
        </ul>
    );
};

export default Navlinks;
