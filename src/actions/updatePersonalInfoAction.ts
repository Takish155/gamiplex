"use server";

import { updatePersonalInfoSchema } from "@/schema/updatePersonalInfoSchema";
import prisma from "../../prisma/prisma";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";

const updatePersonalInfoAction = async (
  changedName: string,
  changedEmail: string,
  password: string
) => {
  const schema = updatePersonalInfoSchema.safeParse({
    changedName: changedName,
    changedEmail: changedEmail,
    password: password,
  });

  const session = await getServerSession();

  if (!schema.success) {
    throw new Error("Invalid data");
  }

  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = await bcrypt.compare(password, user.hashedPassword!);

  if (!passwordMatch) return { message: "Password is incorrect", status: 400 };

  if (user?.email === changedEmail && user?.name === changedName)
    return {
      message: "No changes were made due to having same data.",
      status: 400,
      isChangedEmail: false,
    };

  await prisma.user.update({
    where: { email: session?.user?.email! },
    data: {
      name: changedName,
      email: changedEmail,
    },
  });

  if (user.email === changedEmail) {
    return { message: "Name updated successfully", status: 200 };
  } else {
    return {
      message:
        "Personal info updated successfully, signing out in 5 seconds due to email change.",
      status: 200,
      isChangedEmail: true,
    };
  }
};

export default updatePersonalInfoAction;
