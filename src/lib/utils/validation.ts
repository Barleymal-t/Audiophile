import * as z from "zod/v4";

export const shippingSchema = z.object({
name:z.string().min(5,{message:"Name is too short"}).max(100,{message:"Name is too long"})
})