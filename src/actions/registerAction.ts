"use server";

import bcrypt from "bcrypt";
import prisma from "../../prisma/prisma";
import {
  RegistrationSchemaType,
  registrationSchema,
} from "@/schema/registrationSchema";

const registerAction = async (formData: RegistrationSchemaType) => {
  const data = registrationSchema.safeParse({
    name: formData.name,
    email: formData.email,
    password: formData.password,
    passwordAgain: formData.passwordAgain,
  });

  if (!data.success) {
    return { message: "Registration failed", status: 400 };
  }

  const existingEmail = await prisma.user.findUnique({
    where: { email: data.data.email },
  });

  if (existingEmail) {
    return {
      message: "Email already exist, please try another email.",
      status: 400,
    };
  }

  const hashedPassword = await bcrypt.hash(data.data.password, 10);

  await prisma.user.create({
    data: {
      name: data.data.name,
      email: data.data.email,
      hashedPassword: hashedPassword,
    },
  });

  return {
    message: "Account created successfully... signing in....",
    status: 200,
  };
};

export default registerAction;
