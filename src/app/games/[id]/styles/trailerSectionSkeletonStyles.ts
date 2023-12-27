import { SxProps } from "@mui/material";

export const loadingSection: SxProps = {
  width: "60%",
  maxWidth: "600px",
  "@media (max-width: 800px)": { width: "100%" },
};

export const videoSkeletonStyle: SxProps = {
  width: "100%",
  height: "300px",
  marginBottom: "0.7rem",
};

export const headingSkeletonStyle: SxProps = {
  width: "20%",
  height: "40px",
  marginBottom: "0.4rem",
};

export const videoPhotoDivSkeletonStyle: SxProps = {
  display: "flex",
  gap: "1rem",
  overflow: "hidden",
};

export const videoPhotoSkeletonStyle: SxProps = {
  width: "141px",
  height: "80px",
};
