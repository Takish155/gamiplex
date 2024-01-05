import z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email adresss..." }),
  password: z
    .string()
    .min(6, { message: "Invalid password..." })
    .max(15, { message: "Invalid password..." }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
