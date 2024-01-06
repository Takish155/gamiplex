import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import {
  loginBody,
  loginHeading,
  loginSection,
  mainPageStyle,
} from "../_authStyle";
import LoginSection from "./LoginSection";
import { Metadata } from "next";

const page = () => {
  return (
    <Box component="main" sx={mainPageStyle}>
      <Paper component="section" sx={loginSection} elevation={10}>
        <Typography component="h2" variant="h4" sx={loginHeading}>
          Sign-in
        </Typography>
        <Typography variant="body1" sx={loginBody}>
          Sign-in to your Gamiplex account
        </Typography>
        <LoginSection />
      </Paper>
    </Box>
  );
};

export default page;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Login | Gamiplex",
    description:
      "Sign-in to your Gamiplex account to access your favorite game list.",
  };
}
