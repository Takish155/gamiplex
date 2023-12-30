import { getMovie } from "@/fetch/getMovie";
import React from "react";
import LoadMoreDiscoverSection from "./LoadMoreDiscoverSection";
import DiscoveryTitle from "./DiscoveryTitle";
import { LoadMoreDiscoverContextProvider } from "@/context/UseLoadMoreDiscoverContext";
import LoadMainComponent from "@/components/LoadMainComponent";
import { Metadata } from "next";
import Header from "@/Header/Header";

const page = async ({ params }: { params: { id: string } }) => {
  const data = await getMovie(1, "", params.id, "getByGenres");

  if (!data) {
    throw new Error("No data...");
  }

  return (
    <LoadMoreDiscoverContextProvider>
      <LoadMainComponent
        data={data}
        LoadMoreComponent={LoadMoreDiscoverSection}
        SortingComponent={DiscoveryTitle}
      />
    </LoadMoreDiscoverContextProvider>
  );
};

export default page;

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const genreName = params.id.charAt(0).toUpperCase() + params.id.slice(1);
  return {
    title: `Discsover ${genreName} Games  | Gamiplex`,
    description: `Discover ${genreName} games on Gamiplex. Find new games to play by browsing through our list of ${genreName} games.`,
  };
}
