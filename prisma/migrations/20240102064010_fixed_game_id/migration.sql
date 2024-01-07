-- DropIndex
DROP INDEX "FavoriteGames_id_key";

-- AlterTable
CREATE SEQUENCE favoritegames_id_seq;
ALTER TABLE "FavoriteGames" ADD COLUMN     "gameId" TEXT,
ALTER COLUMN "id" SET DEFAULT nextval('favoritegames_id_seq'),
ADD CONSTRAINT "FavoriteGames_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE favoritegames_id_seq OWNED BY "FavoriteGames"."id";
