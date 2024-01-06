import { SxProps } from "@mui/material";

export const mainStyles: SxProps = {
  paddingTop: "8rem",
  width: "100%",
  margin: "0 auto",
};
export const articleStyles: SxProps = {
  display: "flex",
  gap: "5%",
  flexWrap: "wrap-reverse",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "2rem",
};

export const sectionStyles: SxProps = {
  maxWidth: "1010px",
  mx: "auto",
  marginBottom: "3.5rem",
};

export const articleStylesAlt: SxProps = {
  maxWidth: "1010px",
  display: "flex",
  gap: "5%",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "4rem",
  margin: "0 auto",
};

export const sectionStylesAlt: SxProps = {
  width: "60%",
  mx: "auto",
  marginBottom: "4rem",
  "@media (max-width:800px)": { width: "100%" },
};
