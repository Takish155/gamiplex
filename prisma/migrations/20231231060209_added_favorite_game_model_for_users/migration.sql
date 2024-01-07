-- CreateTable
CREATE TABLE "FavoriteGames" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "released" TEXT,
    "rating" DOUBLE PRECISION NOT NULL,
    "background_image" TEXT,
    "userId" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteGames_id_key" ON "FavoriteGames"("id");

-- AddForeignKey
ALTER TABLE "FavoriteGames" ADD CONSTRAINT "FavoriteGames_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
