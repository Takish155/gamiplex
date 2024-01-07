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
    return { message: "User not found", status: 400 };
  }

  const passwordMatch = await bcrypt.compare(
    currentPassword,
    user.hashedPassword!
  );

  if (!passwordMatch) {
    return { message: "Current password is incorrect", status: 400 };
  }

  const passwordSame = await bcrypt.compare(newPassword, user.hashedPassword!);

  if (passwordSame) {
    return {
      message: "New password can't be the same as old password",
      status: 400,
    };
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { email: session!.user!.email! },
    data: { hashedPassword: hashedPassword },
  });

  return { message: "Password changed successfully", status: 200 };
};

export default changePasswordAction;
