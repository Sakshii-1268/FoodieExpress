import { z } from "zod";



export const userSignupScheme = z.object({
    fullname: z.string().min(1, "Fullname is required"),
    email: z.string().email("Invalid Email Address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    contact: z.string().min(10, "Contact Number must be 10 digit"),
});


export type SignupInputState = z.infer<typeof userSignupScheme>;



export const userLoginScheme = z.object({
    email: z.string().email("Invalid Email Address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});


export type LoginInputState = z.infer<typeof userLoginScheme>;