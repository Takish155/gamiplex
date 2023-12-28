import getMovie from "@/fetch/getMovie";
import { LoadMoreHomeContextProvider } from "@/context/UseInfiniteScrollContext";
import LoadMoreHomeSection from "@/components/LoadMoreHomeSection";
import LoadMainComponent from "@/components/LoadMainComponent";
import { Metadata } from "next";

export default async function Home() {
  const data = await getMovie(1, "");

  if (!data) return null;

  return (
    <LoadMoreHomeContextProvider>
      <LoadMainComponent data={data} LoadMoreComponent={LoadMoreHomeSection} />
    </LoadMoreHomeContextProvider>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Gamiplex | Discover New Games`,
    description: `Discover new games to play on Gamiplex. Find new games to play by browsing through our list of games.`,
  };
}
