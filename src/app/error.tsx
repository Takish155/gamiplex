"use client";

import { errorPageStyle } from "@/styles/pageStyles";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ErrorBoundary() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <Box sx={errorPageStyle}>
      <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>
        An error occurred, redirecting you back to home page...
      </Typography>
    </Box>
  );
}
