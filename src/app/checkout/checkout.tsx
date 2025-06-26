"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "@/lib/utils/validation";
import { z } from "zod";
import Input, { Option } from "@/components/input";
import Image from "next/image";
import React from "react";
import CartItem from "@/components/cartitem";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/button";

const options: Option[] = [
    { id: "1", name: "e-Money", value: "e-Money" },
    { id: "2", name: "Cash on Delivery", value: "cash" },
];

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const Checkout = () => {
    const { state, getTotalPrice } = useCart();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            method: "e-Money",
        },
    });

    const selectedPaymentMethod = watch("method");

    const onSubmit = (data: CheckoutFormValues) => {
        console.log("Form Submitted", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="bg-white rounded-lg p-8 lg:basis-[65%]">
                    <h1 className="lg:text-left uppercase text-3xl font-semibold tracking-[0.0625rem] mb-8">
                        Checkout
                    </h1>
                    <div className="py-8 flex flex-col gap-8">
                        {/* Billing */}
                        <div>
                            <h2 className="text-orange uppercase font-semibold text-sm mb-4">
                                billing details
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Input
                                    label="Name"
                                    placeholder="Nii Odartey"
                                    {...register("name")}
                                    error={errors.name?.message}
                                />
                                <Input
                                    label="Email"
                                    placeholder="you@example.com"
                                    {...register("email")}
                                    error={errors.email?.message}
                                />
                                <Input
                                    label="Phone"
                                    placeholder="+233 543..."
                                    {...register("phone")}
                                    error={errors.phone?.message}
                                />
                            </div>
                        </div>

                        {/* Shipping */}
                        <div>
                            <h2 className="text-orange uppercase font-semibold text-sm mb-4">
                                shipping info
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Input
                                    label="Address"
                                    placeholder="Street Address"
                                    className="sm:col-span-2"
                                    {...register("address")}
                                    error={errors.address?.message}
                                />
                                <Input
                                    label="ZIP Code"
                                    placeholder="10001"
                                    {...register("zipcode")}
                                    error={errors.zipcode?.message}
                                />
                                <Input
                                    label="City"
                                    placeholder="City"
                                    {...register("city")}
                                    error={errors.city?.message}
                                />
                                <Input
                                    label="Country"
                                    placeholder="Country"
                                    {...register("country")}
                                    error={errors.country?.message}
                                />
                            </div>
                        </div>

                        {/* Payment */}
                        <div>
                            <h2 className="text-orange uppercase font-semibold text-sm mb-4">
                                payment details
                            </h2>
                            <div className="grid gap-4">
                                <Input
                                    label="Payment Method"
                                    type="radio"
                                    options={options}
                                    {...register("method")}
                                    error={errors.method?.message}
                                />

                                {selectedPaymentMethod === "e-Money" ? (
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input
                                            label="e-Money Number"
                                            placeholder="0541234567"
                                            {...register("emoneyNumber")}
                                            error={errors.emoneyNumber?.message}
                                        />
                                        <Input
                                            label="e-Money PIN"
                                            placeholder="1234"
                                            {...register("emoneyPin")}
                                            error={errors.emoneyPin?.message}
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
                                            The ‘Cash on Delivery’ option
                                            enables you to pay in cash when our
                                            delivery courier arrives at your
                                            residence. Just make sure your
                                            address is correct so that your
                                            order will not be cancelled.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-8 lg:basis-[35%] grid gap-8">
                    <h1 className="text-xl uppercase font-semibold">summary</h1>
                    {state.items.map((item) => (
                        <CartItem
                            display
                            key={item.id}
                            item={item}
                        />
                    ))}
                    <div className="grid gap-4">
                        <div className="flex justify-between [&>dt]:uppercase [&>dt]:opacity-50 [&>dd]:font-semibold">
                            <dt>total</dt>
                            <dd>
                                {getTotalPrice().toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                    minimumFractionDigits:0
                                })}
                            </dd>
                        </div>
                        <div className="flex justify-between [&>dt]:uppercase [&>dt]:opacity-50 [&>dd]:font-semibold">
                            <dt>shipping</dt>
                            <dd>
                                {(50).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                            </dd>
                        </div>
                        <div className="flex justify-between [&>dt]:uppercase [&>dt]:opacity-50 [&>dd]:font-semibold">
                            <dt>vat (included)</dt>
                            <dd>
                                {(0.2 * getTotalPrice()).toLocaleString(
                                    "en-US",
                                    {
                                        style: "currency",
                                        currency: "USD",
                                        minimumFractionDigits:0
                                    }
                                )}
                            </dd>
                        </div>
                        <br />
                        <div className="flex justify-between [&>dt]:uppercase [&>dt]:opacity-50 [&>dd]:font-semibold [&>dd]:text-orange">
                            <dt>grand total</dt>
                            <dd>
                                {(1.2 * getTotalPrice() + 50).toLocaleString(
                                    "en-US",
                                    {
                                        style: "currency",
                                        currency: "USD",
                                        minimumFractionDigits:0
                                    }
                                )}
                            </dd>
                        </div>
                        <Button
                            type="submit"
                            className="w-full mt-8 bg-orange text-white py-2 px-4 cursor-pointer">
                            continue & pay
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Checkout;
