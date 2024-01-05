import Box from "@mui/material/Box";
import React from "react";
import {
  loginBody,
  loginHeading,
  loginSection,
  mainPageStyle,
} from "../_authStyle";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import RegisterSection from "./RegisterSection";

const page = () => {
  return (
    <Box component="main" sx={mainPageStyle}>
      <Paper component="section" sx={loginSection} elevation={10}>
        <Typography component="h2" variant="h4" sx={loginHeading}>
          Sign-Up
        </Typography>
        <Typography variant="body1" sx={loginBody}>
          Sign-up to create your own Gamiplex account
        </Typography>
        <RegisterSection />
      </Paper>
    </Box>
  );
};

export default page;
