"use server";

import bcrypt from "bcrypt";
import prisma from "../../prisma/prisma";
import {
  RegistrationSchemaType,
  registrationSchema,
} from "@/schema/registrationSchema";

const registerAction = async (formData: RegistrationSchemaType) => {
  const data = registrationSchema.safeParse({
    email: formData.email,
    password: formData.password,
    passwordAgain: formData.passwordAgain,
  });

  if (!data.success) {
    return { message: "Registration failed" };
  }

  const existingEmail = await prisma.user.findUnique({
    where: { email: data.data.email },
  });

  if (existingEmail) {
    return { message: "Email already exist, please try another email." };
  }

  const hashedPassword = await bcrypt.hash(data.data.password, 10);

  await prisma.user.create({
    data: {
      email: data.data.email,
      hashedPassword: hashedPassword,
    },
  });

  return { message: "Account created successfully... signing in...." };
};

export default registerAction;
