"use client";

import { errorPageStyle } from "@/styles/pageStyles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <Box sx={errorPageStyle}>
      <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>
        404 page not found, redirecting you back to home page...
      </Typography>
    </Box>
  );
};

export default NotFound;
