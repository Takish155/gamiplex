import { SxProps } from "@mui/material";

export const quickDetailsSectionStyle: SxProps = {
  maxWidth: "350px",
  width: "35%",
  "@media (max-width: 800px)": {
    width: "100%",
    marginTop: "3.5rem",
    marginBottom: "3.5rem",
  },
};

export const infoBackgroundImageStyle: React.CSSProperties = {
  marginBottom: "2.5rem",
  width: "100%",
  height: "auto",
  aspectRatio: "16/9",
};

export const infoStyleContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
};

export const infoHeadingStyle: SxProps = {
  fontSize: "1.25rem",
  fontWeight: "700",
};

export const infoParagraphStyle: SxProps = {
  fontSize: "1rem",
};

export const infoDividerStyle: SxProps = {
  margin: "1.25rem 0",
};
