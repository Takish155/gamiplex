"use server";

import { getServerSession } from "next-auth";
import prisma from "../../prisma/prisma";
import { redirect } from "next/navigation";

const removeFavoriteGameAction = async (gameId: number) => {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session!.user!.email! },
  });

  if (!user) throw new Error("User not found");

  const gameData = await prisma.favoriteGames.findFirst({
    where: { gameId: gameId.toString(), userId: user!.id },
  });

  if (!gameData) throw new Error(gameId + " not found");

  await prisma.favoriteGames.delete({
    where: { id: gameData.id },
  });

  redirect("/user");
};

export default removeFavoriteGameAction;
