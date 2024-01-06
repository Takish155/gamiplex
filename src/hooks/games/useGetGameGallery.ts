import getGameGalleryAction from "@/actions/getGameGalleryAction";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";

const useGetGameGallery = () => {
  const pathName = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["gameGallery", pathName],
    queryFn: async () => getGameGalleryAction(pathName.id),
  });

  return {
    selectedImage,
    setSelectedImage,
    data,
    isLoading,
    isFetched,
    loaded,
    setLoaded,
  };
};

export default useGetGameGallery;
