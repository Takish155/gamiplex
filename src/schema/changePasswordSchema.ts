import z from "zod";

export const changePasswordSchema = z
  .object({
    password: z.string().min(6, { message: "Invalid password" }),
    newPassword: z
      .string()
      .min(6, { message: "Password must be more than 6 letters" })
      .max(15, { message: "Password must be less than 15 letters" }),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>;
