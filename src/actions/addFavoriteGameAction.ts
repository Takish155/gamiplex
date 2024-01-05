"use server";

import { z } from "zod";
import prisma from "../../prisma/prisma";
import { revalidatePath } from "next/cache";
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
    return { message: "Adding to favorite failed" };
  }
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });
  if (!user) {
    return { message: "Adding to favorite failed" };
  }

  const existingGame = await prisma.favoriteGames.findFirst({
    where: { gameId: validateData.data.id.toString(), userId: user.id },
  });

  if (existingGame) {
    throw new Error("Game already in your favorite list");
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

  revalidatePath("/user");
};

export default addFavoriteGameAction;
