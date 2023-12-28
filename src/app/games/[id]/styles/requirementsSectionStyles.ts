import { SxProps } from "@mui/material";

export const requirementSectionStyle: SxProps = {
  minWidth: "250px",
  maxWidth: "500px",
  width: "45%",
  margin: "2rem auto",
  "@media (max-width: 800px)": {
    width: "80%",
  },
  "@media (max-width: 600px)": {
    width: "95%",
  },
};

export const requirementHeadingStyle: SxProps = {
  fontSize: "1.875rem",
  fontWeight: 700,
  textAlign: "center",
  width: "50%",
  margin: "2rem auto",
};

export const requirementDivStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  gap: "3rem",
};
