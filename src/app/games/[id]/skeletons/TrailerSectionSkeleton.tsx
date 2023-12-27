import React from "react";
import {
  headingSkeletonStyle,
  loadingSection,
  videoPhotoDivSkeletonStyle,
  videoPhotoSkeletonStyle,
  videoSkeletonStyle,
} from "../styles/trailerSectionSkeletonStyles";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const TrailerSectionSkeleton = () => {
  return (
    <Box component="section" sx={loadingSection}>
      <Skeleton variant="rectangular" sx={videoSkeletonStyle} />
      <Skeleton variant="text" sx={headingSkeletonStyle} />
      <Box sx={videoPhotoDivSkeletonStyle}>
        <Skeleton variant="rectangular" sx={videoPhotoSkeletonStyle} />
        <Skeleton variant="rectangular" sx={videoPhotoSkeletonStyle} />
        <Skeleton variant="rectangular" sx={videoPhotoSkeletonStyle} />
        <Skeleton variant="rectangular" sx={videoPhotoSkeletonStyle} />
      </Box>
    </Box>
  );
};

export default TrailerSectionSkeleton;
