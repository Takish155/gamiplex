"use server";

import { getServerSession } from "next-auth";
import prisma from "../../prisma/prisma";

const showPersonalInfoAction = async () => {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session!.user!.email! },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return { name: user.name, email: user.email };
};

export default showPersonalInfoAction;
