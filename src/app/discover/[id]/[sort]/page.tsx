import { LoadMoreDiscoverContextProvider } from "@/context/UseLoadMoreDiscoverContext";
import React from "react";
import DiscoveryTitle from "../DiscoveryTitle";
import getMovie from "@/fetch/getMovie";
import { Genres } from "@/types/reponseDataType";
import LoadMoreDiscoverSection from "../LoadMoreDiscoverSection";
import LoadMainComponent from "@/components/LoadMainComponent";
import { Metadata } from "next";

const page = async ({ params }: { params: { id: string; sort: string } }) => {
  const data = await getMovie(
    1,
    params.sort as Genres,
    params.id,
    "getByGenres"
  );

  if (!data) return <div>loading...</div>;

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
  };
}
