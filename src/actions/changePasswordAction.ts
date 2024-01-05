"use server";

import { getServerSession } from "next-auth";
import bcrypt from "bcrypt";
import prisma from "../../prisma/prisma";

const changePasswordAction = async (
  currentPassword: string,
  newPassword: string
) => {
  const session = await getServerSession();

  const user = await prisma.user.findUnique({
    where: { email: session!.user!.email! },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = await bcrypt.compare(
    currentPassword,
    user.hashedPassword!
  );
  if (!passwordMatch) {
    throw new Error("Password doesn't match!");
  }

  const passwordSame = await bcrypt.compare(newPassword, user.hashedPassword!);
  if (passwordSame) {
    throw new Error("New password can't be the same as old password!");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { email: session!.user!.email! },
    data: { hashedPassword: hashedPassword },
  });

  return { message: "Password changed successfully" };
};

export default changePasswordAction;
