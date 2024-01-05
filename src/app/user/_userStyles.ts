import { SxProps } from "@mui/material";

export const mainStyle: SxProps = {
  width: "95%",
  margin: "0 auto",
  paddingTop: "6rem",
  maxWidth: "1440px",
  "@media (max-width: 600px)": {
    width: "100%",
  },
};

export const favoriteGameHeading: SxProps = {
  fontSize: "1.8rem",
  marginTop: "1rem",
  marginBottom: "2rem",
  fontWeight: "semibold",
};

export const favoriteGameSection: SxProps = {
  width: "97%",
  margin: "0 auto",
};

export const menuItem: SxProps = {
  padding: "0.5rem",
};

export const userGreatings: SxProps = {
  fontSize: "1.2rem",
  marginBottom: "1rem",
};

export const loadingPageContainer: SxProps = {
  width: "100%",
  height: "50vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// Setting Styles
export const settingSection: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  gap: "1rem",
};

export const accordion: SxProps = {
  width: "100%",
  minWidth: "250px",
  maxWidth: "700px",
  marginBottom: "2rem",
};

export const accordionHeading: SxProps = {
  fontSize: "1.5rem",
  marginBottom: "1rem",
  fontWeight: "bold",
};

export const formContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginBottom: "1rem",
  width: "100%",
};

export const buttonContainer: SxProps = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "2rem",
};
