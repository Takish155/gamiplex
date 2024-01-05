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

  if (!passwordMatch) {
    throw new Error("Password doesn't match");
  }

  if (user?.email === changedEmail && user?.name === changedName) {
    throw new Error("No changes were made due to having same data.");
  }

  await prisma.user.update({
    where: { email: session?.user?.email! },
    data: {
      name: changedName,
      email: changedEmail,
    },
  });

  if (user.email === changedEmail) {
    return { message: "Name updated successfully" };
  }
};

export default updatePersonalInfoAction;
