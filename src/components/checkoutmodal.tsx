import Image from "next/image";
import React from "react";
import TestModal from "./testmodal";
import { useCart } from "@/context/CartContext";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
    const { state, getTotalPrice, getTotalCount, clearCart } = useCart();
    const item = state.items[0];
    const router = useRouter();

    const handleClose = () => {
        onClose();
        clearCart();
        router.push("/");
    };
    return (
        <TestModal
            isOpen={isOpen}
            onClose={onClose}>
            <div className="p-4 rounded-lg flex flex-col justify-center gap-6">
                <Image
                    src="/assets/checkout/icon-order-confirmation.svg"
                    alt="confirm"
                    width={50}
                    height={50}
                />
                <h1 className="text-3xl uppercase font-semibold">
                    thank you
                    <br />
                    for your order
                </h1>
                <p className="opacity-50 text-sm">
                    You will receive an email confirmation shortly.
                </p>
                <div className="rounded-lg flex overflow-hidden">
                    <div className="bg-gray basis-[55%] p-6">
                        {item && (
                            <div>
                                {/* left side  */}
                                <div className="flex items-center justify-between">
                                    {/* image  */}
                                    <Image
                                        src={item.image}
                                        width={50}
                                        height={50}
                                        alt={item.name}
                                        className="rounded-lg"
                                    />
                                    <div className="">
                                        <div className="flex justify-between">
                                            <p className="text-xs font-semibold uppercase">
                                                {item.name
                                                    .toLowerCase()
                                                    .replace(
                                                        item.category,
                                                        " "
                                                    )}
                                            </p>
                                            <p className="opacity-50">
                                                x{item.quantity}
                                            </p>
                                        </div>

                                        <p className="text-xs opacity-50 font-semibold tracking-wider">
                                            {item.price.toLocaleString(
                                                "en-US",
                                                {
                                                    style: "currency",
                                                    currency: "USD",
                                                    minimumFractionDigits: 0,
                                                }
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <hr className="text-medium-gray my-2" />

                        <p className="text-xs text-center opacity-50 font-semibold">
                            and {getTotalCount() - 1} other item(s)
                        </p>
                    </div>
                    <div className="bg-black basis-[45%] text-gray flex flex-col justify-center gap-2 p-6">
                        <p className="uppercase opacity-50 ">grand total</p>
                        <p className="text-xl font-semibold ">
                            {getTotalPrice().toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 0,
                            })}
                        </p>
                    </div>
                </div>
                <Button onClick={handleClose}>back to home</Button>
            </div>
        </TestModal>
    );
};

export default CheckoutModal;
