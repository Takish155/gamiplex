"use client";

import useGetGameGallery from "@/hooks/useGetGameGallery";
import { Box, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  galleryMainImage,
  gameGalleryHeadingStyle,
  gameGallerySection,
  subImagesContainer,
} from "../styles/gameGallerySectionStyle";

const GameGallerySection = () => {
  const {
    isLoading,
    data,
    selectedImage,
    isFetched,
    setSelectedImage,
    loaded,
    setLoaded,
  } = useGetGameGallery();

  if (isLoading) return <CircularProgress />;
  if (isFetched && !selectedImage) {
    setSelectedImage(data?.results[0].image!);
  }

  return (
    <Box component="section" sx={gameGallerySection}>
      {loaded && (
        <Typography sx={gameGalleryHeadingStyle}>Game Gallery</Typography>
      )}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}
      >
        <Image
          src={selectedImage}
          alt="Image of idk"
          onLoad={() => setLoaded(true)}
          width={300}
          height={100}
          style={galleryMainImage as React.CSSProperties}
        />
      </Box>
      {loaded && (
        <Box sx={subImagesContainer}>
          {data?.results.map((image, key) => {
            return (
              <Image
                key={key}
                src={image.image}
                alt="image of idk"
                width={141}
                height={80}
                style={{
                  width: "100px",
                  height: "auto",
                  marginBottom: "1rem",
                  border:
                    selectedImage === image.image ? "1px solid white" : "",
                }}
                onClick={() => setSelectedImage(image.image)}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default GameGallerySection;
