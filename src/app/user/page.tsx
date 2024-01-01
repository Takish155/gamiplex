import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { mainPageStyle } from "../auth/_authStyle";

const page = () => {
  return (
    <Box sx={mainPageStyle}>
      <Grid container>
        <Grid item xs={12} md={6}>
          a
        </Grid>
        <Grid item xs={12} md={6}>
          i
        </Grid>
      </Grid>
    </Box>
  );
};

export default page;
