import { SxProps } from "@mui/material";

export const requirementSectionStyle: SxProps = {
  minWidth: "280px",
  width: "45%",
  margin: "2rem auto",
  "@media (max-width: 800px)": {
    width: "80%",
  },
};

export const requirementHeadingStyle: SxProps = {
  fontSize: "1.875rem",
  fontWeight: 700,
  marginBottom: "1.5rem",
  textAlign: "center",
};

export const requirementDivStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  gap: "3rem",
};
