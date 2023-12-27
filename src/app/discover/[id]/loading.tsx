import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
