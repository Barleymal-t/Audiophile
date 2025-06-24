"use client";
import { Product } from "@/models/product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { ButtonHTMLAttributes, FC } from "react";
import React from "react";

type Variant =
    | "default"
    | "outline"
    | "destructive"
    | "ghost"
    | "secondary"
    | "link"
    | "custom";
type Size = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
}

const getVariantClasses = (variant: Variant): string => {
    switch (variant) {
        case "outline":
            return "uppercase font-medium border border-input hover:bg-accent hover:text-accent-foreground";
        case "destructive":
            return "bg-red-500 text-white hover:bg-red-600";
        case "ghost":
            return " uppercase text-[rgba(0,0,0,0.5)] hover:bg-accent hover:text-orange";
        case "secondary":
            return "uppercase bg-transparent font-medium border-1 text-black hover:border-black hover:bg-black hover:text-white";
        case "link":
            return " capitalize text-[rgba(0,0,0,0.5)] font-light hover:underline text-primary";
        case "custom":
            return "uppercase bg-black hover:bg-black/80";
        default:
            return " font-medium uppercase bg-orange text-white hover:bg-peach";
    }
};

const getSizeClasses = (size: Size): string => {
    switch (size) {
        case "sm":
            return "h-9 px-3 text-sm";
        case "lg":
            return "h-11 px-8 text-base";
        case "icon":
            return "h-10 w-10 p-0";
        default:
            return "h-10 px-8 py-3.5 text-sm";
    }
};

export const Button: FC<ButtonProps> = ({
    children,
    className = "",
    variant = "default",
    size = "default",
    ...props
}) => {
    const baseClasses =
        "text-nowrap gap-2 cursor-pointer inline-flex items-center justify-center transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const finalClassName = `${baseClasses} ${getVariantClasses(
        variant
    )} ${getSizeClasses(size)} ${className}`;

    return (
        <button
            className={finalClassName}
            {...props}>
            {children}{" "}
            {variant == "ghost" && (
                <Image
                    width={7}
                    height={10}
                    src="/assets/shared/desktop/icon-arrow-right.svg"
                    alt="Arrow Icon"
                />
            )}
        </button>
    );
};

export const BackButton = () => {
    const router = useRouter();

    return (
        <Button
            onClick={() => router.push("../")}
            variant="link"
            size="lg">
            go back
        </Button>
    );
};

export const ProductButton = ({product}:{product:Product}) => {
    const router = useRouter();

    return <Button onClick={()=>router.push(`/${product.category}/${product.slug}`)}>see product</Button>;
};
