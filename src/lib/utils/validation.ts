// validationSchema.ts
import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short"),
  address: z.string().min(1, "Address is required"),
  zipcode: z.string().min(1, "ZIP Code is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  method: z.enum(["e-Money", "cash"]),
  emoneyNumber: z
    .string()
    .min(1, "e-Money Number is required")
    .optional()
    .or(z.literal("")),
  emoneyPin: z
    .string()
    .min(1, "e-Money PIN is required")
    .optional()
    .or(z.literal("")),
});
