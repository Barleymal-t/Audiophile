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

export function Cart() {
    const { state, clearCart, getTotalPrice, getTotalCount } = useCart();

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <div className="relative">
                        <span className="absolute top-0 right-0 bg-orange rounded-full w-4 h-4 text-xs flex justify-center items-center translate-x-1/2 -translate-y-1/2">{getTotalCount()}</span>
                        <Image
                            className="cursor-pointer"
                            src="/assets/shared/desktop/icon-cart.svg"
                            alt="cart"
                            height={24}
                            width={24}
                        />
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader className="!p-0">
                        <div className="flex items-center justify-between">
                            <DialogTitle>
                                Cart ( {getTotalCount()} )
                            </DialogTitle>
                            <Button
                                onClick={() => clearCart()}
                                variant="link"
                                className="mr-5"
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
                            className="w-full"
                            type="submit">
                            checkout
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}
