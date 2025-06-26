"use client";
import Input, { Option } from "@/components/input";
import Image from "next/image";
import React, { useState } from "react";

// type Inputs = {
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   zipcode: number;
//   city: string;
//   country: string;
//   method: "emoney"|"cash"
// };
const options: Option[] = [
    {
        id: "1",
        name: "e-Money",
        value: "e-Money",
    },
    {
        id: "2",
        name: "Cash on Delivery",
        value: "cash",
    },
];

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    return (
        <div className="bg-white rounded-lg p-8 lg:basis-[65%]">
            <form action="">
                <h1 className="lg:text-left uppercase text-3xl font-semibold tracking-[0.0625rem] mb-8">
                    Checkout
                </h1>
                <div className="py-8 flex flex-col gap-8">
                    <div className="">
                        <h2 className="text-orange uppercase font-semibold text-sm mb-4">
                            billing details
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Input
                                label="Name"
                                placeholder="Nii Odartey Lamptey"
                            />
                            <Input
                                label="Email"
                                placeholder="frontendmentor@azubi.com"
                            />
                            <Input
                                label="Phone Number"
                                placeholder="+233 543-123-456"
                            />
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-orange uppercase font-semibold text-sm mb-4">
                            shipping info
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Input
                                label="Address"
                                placeholder="1137 Williams Avenue"
                                className="sm:col-span-2"
                            />
                            <Input
                                label="ZIP Code"
                                placeholder="10001"
                            />
                            <Input
                                label="City"
                                placeholder="Accra"
                            />
                            <Input
                                label="Country"
                                placeholder="Ghana"
                            />
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-orange uppercase font-semibold text-sm mb-4">
                            payment details
                        </h2>
                        <div className="grid gap-4 col-span-2">
                            <Input
                                className=""
                                label="Payment Method"
                                handleChange={setPaymentMethod}
                                type="radio"
                                options={options}
                            />
                            {paymentMethod === "e-Money" ? (
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="e-Money Number"
                                        placeholder="0541234567"
                                    />
                                    <Input
                                        label="e-Money PIN"
                                        placeholder="1234"
                                    />
                                </div>
                            ) : (
                                <div className="flex justify-center items-center gap-8">
                                        <Image
                                            width={200}
                                            height={200}
                                            src="/assets/checkout/icon-cash-on-delivery.svg"
                                            alt="cash on delivery"
                                        />
                                    <p className="opacity-50 text-lg">
                                        The ‘Cash on Delivery’ option enables
                                        you to pay in cash when our delivery
                                        courier arrives at your residence. Just
                                        make sure your address is correct so
                                        that your order will not be cancelled.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
