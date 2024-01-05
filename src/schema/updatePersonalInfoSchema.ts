import { z } from "zod";

export const updatePersonalInfoSchema = z.object({
  changedName: z.string(),
  changedEmail: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Invalid password" }),
});

export const updatePersonalInfoInputSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be more than 3 letters" })
    .max(30, { message: "Name must be less than 30 letters" })
    .refine((data) => /^[a-zA-Z\s]*$/.test(data)),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Invalid password" }),
});

export type UpdatePersonalInfoSchemaType = z.infer<
  typeof updatePersonalInfoInputSchema
>;
