"use server";

import { getServerSession } from "next-auth";
import prisma from "../../prisma/prisma";
import { redirect } from "next/navigation";

const removeFavoriteGameAction = async (gameId: number) => {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session!.user!.email! },
  });

  const gameData = await prisma.favoriteGames.findFirst({
    where: { gameId: gameId.toString(), userId: user!.id },
  });

  if (!gameData) {
    return { message: "Removing game from favorite failed" };
  }

  await prisma.favoriteGames.delete({
    where: { id: gameData.id },
  });

  redirect("/user");
};

export default removeFavoriteGameAction;
