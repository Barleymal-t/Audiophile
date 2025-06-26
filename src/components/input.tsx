"use client";
import React, { forwardRef, useState } from "react";

export interface Option {
    id: string;
    value: string;
    name: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    options?: Option[];
    type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, options, type = "text", ...props }, ref) => {
        const [selectedValue, setSelectedValue] = useState<string | undefined>(
            props.value?.toString()
        );

        const handleRadioChange = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => {
            setSelectedValue(event.target.value);
            props.onChange?.(event); // Call parent onChange if provided
        };

        if (type === "radio" && options) {
            return (
                <div className="grid sm:grid-cols-2 gap-4">
                    <p className="mb-2 font-semibold text-sm">{label}</p>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex flex-col gap-2">
                        {options.map((option) => {
                            const isSelected = selectedValue === option.value;

                            return (
                                <label
                                    key={option.id}
                                    className={` cursor-pointer flex gap-4 border-1 group-focus-within:border-2 group-focus-within:border-orange ${
                                        isSelected ? "border-orange" : ""
                                    } transition-colors p-4 rounded-md w-full  border-medium-gray focus:border-orange`}>
                                    <div className="h-6 w-6 rounded-full border border-gray-400 flex items-center justify-center">
                                        <div
                                            className={`w-3 h-3 rounded-full bg-orange transition-transform ${
                                                isSelected
                                                    ? "scale-100"
                                                    : "scale-0"
                                            }`}
                                        />
                                    </div>{" "}
                                    <input
                                        type="radio"
                                        value={option.value}
                                        checked={isSelected}
                                        onChange={handleRadioChange}
                                        name={props.name}
                                        ref={ref}
                                        className="hidden"
                                    />
                                    <span className="text-sm font-medium">
                                        {option.name}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                </div>
            );
        }

        // For regular input
        return (
            <div className={`group flex flex-col gap-2  ${props.className ?? ""}`}>
                <div className="flex justify-between">
                    <label className="mb-1 text-sm font-medium">{label}</label>
                    {error && <p className="text-red-500 text-xs">{error}</p>}
                </div>
                <div className=" border-1 group-focus-within:border-2 group-focus-within:border-orange  transition-colors p-4 rounded-md w-full  border-medium-gray focus:border-orange">
                    {" "}
                    <input
                        className=" focus:outline-none w-full placeholder:font-semibold placeholder:opacity-50"
                        type={type}
                        ref={ref}
                        {...props}
                    />
                </div>
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
