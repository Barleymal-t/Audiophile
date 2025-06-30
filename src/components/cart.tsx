import {
    Dialog,
    //   DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/modal";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Button } from "./button";
import Image from "next/image";
import CartItem from "./cartitem";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export function Cart() {
    const router = useRouter();
    const { state, clearCart, getTotalPrice, getTotalCount } = useCart();

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <div className="relative cursor-pointer">
                        <span className="absolute top-0 right-0 bg-orange rounded-full w-4 h-4 text-xs flex justify-center items-center translate-x-1/2 -translate-y-1/2">
                            {getTotalCount()}
                        </span>
                        <Image
                            src="/assets/shared/desktop/icon-cart.svg"
                            alt="cart"
                            height={24}
                            width={24}
                        />
                    </div>
                </DialogTrigger>
                {/* {state.items.length == 0 ? (
                    <DialogContent>
                        <h1>Your cart is empty</h1>
                        <Image
                        className="bg-orange text-black"
                            src="/assets/shared/desktop/icon-cart.svg"
                            alt="cart"
                            height={24}
                            width={24}
                        />
                    </DialogContent>
                ) : ( */}
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader className="!p-0">
                        <div className="flex items-center justify-between">
                            <DialogTitle>
                                Cart ( {getTotalCount()} )
                            </DialogTitle>
                            <Button
                                onClick={() => clearCart()}
                                variant="link"
                                className="mr-5 underline"
                                size="icon">
                                remove all
                            </Button>
                        </div>
                    </DialogHeader>
                    {/* counter section  */}
                    {state.items.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                        />
                    ))}

                    {/* end of counter section  */}
                    <div className="flex items-center justify-between">
                        <p className="opacity-50 uppercase font-light">total</p>
                        <p className="font-semibold">
                            $ {getTotalPrice().toFixed(2)}
                        </p>
                    </div>
                    <DialogFooter>
                        <Button
                            disabled={state.items.length < 1}
                            onClick={() => router.push("/checkout")}
                            className="w-full"
                            type="submit">
                            checkout
                        </Button>
                    </DialogFooter>
                </DialogContent>
                {/* )} */}
            </form>
        </Dialog>
    );
}
