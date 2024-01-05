import { SxProps } from "@mui/material";

export const mainPageStyle: SxProps = {
  marginTop: "2rem",
  marginBottom: "2rem",
  width: "100%",
  height: "100vh",
  display: "flex",
};

export const loginSection: SxProps = {
  margin: "auto",
  width: "80%",
  maxWidth: "650px",
  minWidth: "280px",
  borderRadius: "3%",
  "@media (max-width: 600px)": {
    marginTop: "2rem",
    width: "95%",
  },
};

export const loginHeading: SxProps = {
  textAlign: "center",
  marginTop: "2rem",
  marginBottom: "0.5rem",
};

export const loginBody: SxProps = {
  textAlign: "center",
  marginBottom: "3rem",
};

export const loginForm: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "70%",
  margin: "1rem auto 4rem auto",
  justifyContent: "center",
  gap: "2rem",
  marginBottom: "4rem",
  maxWidth: "650px",
  minWidth: "270px",
};

export const textField: SxProps = {
  marginBottom: "1rem",
};

export const buttonBox: SxProps = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  gap: "1.3rem",
  alignItems: "center",
  flexWrap: "wrap",
};
export const buttonStyle: SxProps = {
  width: "200px",
};
