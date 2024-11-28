import {z} from 'zod'

// login form schema
export const LoginFormSchema = z.object({
    username: z
        .string()
        .min(3,{message: 'username must be at least 3 characters'})
        .trim(),
    password: z
        .string()
        .min(5,{message: 'password must be at least 5 characters'})
        .regex(/[a-zA-Z]/,{message: 'password must contain at least 1 letter'})
        .regex(/[0-9]/,{message: 'password must contain at least 1 digit'})
        .regex(/[^a-zA-Z0-9]/,{message: 'password must contain at least 1 special character'})
        .trim()
})