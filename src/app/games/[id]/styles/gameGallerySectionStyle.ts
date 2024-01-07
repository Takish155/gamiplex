import { SxProps } from "@mui/material";

export const gameGallerySection: SxProps = {
  width: "100%",
  maxWidth: "1010px",
  margin: "0 auto",
};

export const gameGalleryHeadingStyle: SxProps = {
  fontSize: "1.875rem",
  fontWeight: 700,
  marginBottom: "1.5rem",
  textAlign: "center",
  "@media (max-width: 750px)": {
    textAlign: "left",
  },
};

export const galleryMainImage: SxProps = {
  width: "100%",
  height: "auto",
  minWidth: "250px",
  maxWidth: "600px",
};

export const subImagesContainer: SxProps = {
  display: "flex",
  gap: "1rem",
  overflowX: "scroll",
  justifyContent: "center",
  "@media (max-width: 750px)": {
    justifyContent: "flex-start",
  },
};
