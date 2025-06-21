import { useRouter } from "next/navigation";
import React from "react";

const Navlinks = () => {
    const router = useRouter();
    return (
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center  font-semibold uppercase [&>*]:hover:text-orange [&>*]:cursor-pointer">
                <li onClick={()=>router.push("/")}>home</li>
                <li onClick={()=>router.push("/headphones")}>headphones</li>
                <li onClick={()=>router.push("/speakers")}>speakers</li>
                <li onClick={()=>router.push("/earphones")}>earphones</li>
            </ul>
    );
};

export default Navlinks;
