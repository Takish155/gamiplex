import { SxProps } from "@mui/material";

export const trailerSectionStyle: SxProps = {
  maxWidth: "600px",
  width: "60%",
  "@media (max-width: 800px)": { width: "100%" },
};

export const trailerHeadingStyle: SxProps = {
  fontSize: "1.25rem",
  fontWeight: "bold",
  marginBottom: "0.75rem",
};

export const trailerListStyle: SxProps = {
  display: "flex",
  gap: "1.75rem",
  overflowY: "hidden",
  overflowX: "scroll",
  marginBottom: "1.5rem",
};
