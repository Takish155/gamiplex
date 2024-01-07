"use server";

import { getServerSession } from "next-auth";
import prisma from "../../prisma/prisma";

const showFavoriteAction = async () => {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session!.user!.email! },
  });

  const data = await prisma.favoriteGames.findMany({
    where: { userId: user!.id.toString() },
  });

  if (!data) {
    return null;
  }

  return data;
};

export default showFavoriteAction;
