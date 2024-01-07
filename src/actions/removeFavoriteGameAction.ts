"use server";

import { getServerSession } from "next-auth";
import prisma from "../../prisma/prisma";

const removeFavoriteGameAction = async (gameId: number) => {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session!.user!.email! },
  });

  if (!user) return { message: "User not found", status: 404 };

  const gameData = await prisma.favoriteGames.findFirst({
    where: { gameId: gameId.toString(), userId: user!.id },
  });

  if (!gameData)
    return { message: "Game not found in your library", status: 404 };

  await prisma.favoriteGames.delete({
    where: { id: gameData.id },
  });

  return { message: "Game removed from your library", status: 200 };
};

export default removeFavoriteGameAction;
