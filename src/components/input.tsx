"use client";
import React, { FC, InputHTMLAttributes, useState } from "react";

export interface Option {
    id: string;
    value: string;
    name: string;
}
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    options?: Option[];
    handleChange?: (value: string) => void;
}
type PaymentMethodType = "Cash on Delivery" | "e-Money";
// type InputStateType = {
//   value: string;
//   error?: boolean;
// };

const Input: FC<InputProps> = ({
    label = "Hello",
    placeholder,
    className,
    type,
    name,
    options,
    handleChange,
}) => {
    const [paymentMethod, setPaymentMethod] =
        useState<PaymentMethodType>();
    if (type == "radio") {
        const handlePaymentMethodChange = (
            e: React.ChangeEvent<HTMLInputElement>
        ) => {
            console.log("valueeeeee",e.target.value);
            setPaymentMethod(e.target.value as PaymentMethodType);
            handleChange?.(e.target.value as PaymentMethodType);
        };
        return (
            <div className="grid sm:grid-cols-2 gap-4">
                <h1 className="sm:row-span-2 text-black font-semibold text-sm cursor-pointer">
                    {label}
                </h1>
                <div className="flex flex-col gap-4">
                    {options?.map((option) => (
                    <label
                        key={option.id}
                        htmlFor={option.id}
                        className={` cursor-pointer flex gap-4 border-1 group-focus-within:border-2 group-focus-within:border-orange ${
                            paymentMethod === option.value
                                ? "border-orange"
                                : ""
                        } transition-colors p-4 rounded-md w-full  border-medium-gray focus:border-orange`}>
                        <div className="h-6 w-6 rounded-full border border-gray-400 flex items-center justify-center">
                            <div
                                className={`w-3 h-3 rounded-full bg-orange transition-transform ${
                                    paymentMethod === option.value
                                        ? "scale-100"
                                        : "scale-0"
                                }`}
                            />
                        </div>
                        {option.name}
                        <input
                            className="peer hidden"
                            type="radio"
                            name={label}
                            value={option.value}
                            id={option.id}
                            checked={paymentMethod === option.value}
                            onChange={handlePaymentMethodChange}
                        />
                    </label>
                ))}
                </div>
                
            </div>
        );
    }

    return (
        <div className={`group flex flex-col gap-2  ${className ?? ""}`}>
            <label
                className="text-black font-semibold text-sm"
                htmlFor={label}>
                {label}
            </label>
            <div className=" border-1 group-focus-within:border-2 group-focus-within:border-orange  transition-colors p-4 rounded-md w-full  border-medium-gray focus:border-orange">
                <input
                    className=" focus:outline-none w-full placeholder:font-semibold"
                    placeholder={placeholder ?? `Insert your ${label}`}
                    name={name ?? label}
                    type="text"
                />
            </div>
        </div>
    );
};

export default Input;
