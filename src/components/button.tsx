import Image from "next/image"
import type { ButtonHTMLAttributes, FC } from "react"
import React from "react"

type Variant = "default" | "outline" | "destructive" | "ghost" | "secondary" | "link"
type Size = "default" | "sm" | "lg" | "icon"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const getVariantClasses = (variant: Variant): string => {
  switch (variant) {
    case "outline":
      return "border border-input hover:bg-accent hover:text-accent-foreground"
    case "destructive":
      return "bg-red-500 text-white hover:bg-red-600"
    case "ghost":
      return "text-[rgba(0,0,0,0.5)] hover:bg-accent hover:text-orange"
    case "secondary":
      return "bg-transparent border-1 text-black hover:border-black hover:bg-black hover:text-white"
    case "link":
      return "underline-offset-4 hover:underline text-primary"
    default:
      return "bg-orange text-white hover:bg-peach"
  }
}

const getSizeClasses = (size: Size): string => {
  switch (size) {
    case "sm":
      return "h-9 px-3 text-sm"
    case "lg":
      return "h-11 px-8 text-base"
    case "icon":
      return "h-10 w-10 p-0"
    default:
      return "h-10 px-8 py-3.5 text-sm"
  }
}

export const Button: FC<ButtonProps> = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseClasses =
    "uppercase gap-2 cursor-pointer inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none"

  const finalClassName = `${baseClasses} ${getVariantClasses(variant)} ${getSizeClasses(size)} ${className}`

  return (
    <button className={finalClassName} {...props}>
      {children} {variant=="ghost" && <Image width={7} height={10} src="/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow Icon"/> }
    </button>
  )
}
