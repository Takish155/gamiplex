"use server";

import { z } from "zod";
import prisma from "../../prisma/prisma";
import { getServerSession } from "next-auth";

type AddFavoriteDataType = {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number;
};

const addFavoriteGameAction = async (data: AddFavoriteDataType) => {
  const session = await getServerSession();
  const schema = z.object({
    id: z.number(),
    name: z.string(),
    background_image: z.string(),
    released: z.string(),
    rating: z.number(),
  });

  const validateData = schema.safeParse({
    id: data.id,
    name: data.name,
    background_image: data.background_image,
    released: data.released,
    rating: data.rating,
  });

  if (!validateData.success) {
    return { message: "Adding to favorite failed", status: 400 };
  }
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });
  if (!user) {
    return { message: "Adding to favorite failed", status: 400 };
  }

  const existingGame = await prisma.favoriteGames.findFirst({
    where: { gameId: validateData.data.id.toString(), userId: user.id },
  });

  if (existingGame) {
    return { message: "Game already in favorite", status: 400 };
  }

  await prisma.user.update({
    where: { email: session?.user?.email! },
    data: {
      favoriteGames: {
        create: {
          gameId: validateData.data.id.toString(),
          name: validateData.data.name,
          background_image: validateData.data.background_image,
          released: validateData.data.released,
          rating: validateData.data.rating,
        },
      },
    },
  });

  return { message: "Game added to favorite", status: 200 };
};

export default addFavoriteGameAction;
