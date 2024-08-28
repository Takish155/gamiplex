"use server";

import bcrypt from "bcrypt";
import prisma from "../../prisma/prisma";
import {
  RegistrationSchemaType,
  registrationSchema,
} from "@/schema/registrationSchema";

const registerAction = async (formData: RegistrationSchemaType) => {
  try {
    const data = registrationSchema.safeParse({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      passwordAgain: formData.passwordAgain,
    });

    if (!data.success) throw new Error("Invalid data");

    const existingEmail = await prisma.user.findUnique({
      where: { email: data.data.email },
    });

    if (existingEmail)
      throw new Error("Email already exist, please try another email.");

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
  } catch (error) {
    
    if (error instanceof Error) {
      return {
        message: error.message,
        status: 400,
      };
    } else {
      return {
        message: "Something went wrong",
        status: 400,
      };
    }
  }
};

export default registerAction;
