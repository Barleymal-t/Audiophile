
import {
  Dialog,
//   DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/modal"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Button } from "./button"
import Image from "next/image"

export function Cart() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
            <div className="">
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
          <DialogHeader>
            <div className="flex items-center justify-between">

            <DialogTitle>Cart (1)</DialogTitle>
            <Button variant="link" size="lg">remove all</Button>
            </div>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-between">
            <p className="opacity-50 uppercase font-light">total</p>
            <p className="font-semibold">$ 2345</p>
          </div>
          <DialogFooter>
            <Button className="w-full" type="submit">checkout</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
