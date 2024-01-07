"use client";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  accordion,
  accordionHeading,
  buttonContainer,
  formContainer,
} from "../_userStyles";
import useUpdatePersonalInfo from "@/hooks/user/account/useUpdatePersonalInfo";

const UpdatePersonalInfoForm = () => {
  const {
    handleSubmit,
    onSubmit,
    register,
    errors,
    message,
    setMessage,
    data,
    isLoading,
    isPending,
  } = useUpdatePersonalInfo();

  if (isLoading)
    return (
      <Box
        sx={{
          width: "100vw",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Box
      component="form"
      sx={accordion}
      onSubmit={handleSubmit((data) => {
        onSubmit(data.name, data.email, data.password);
      })}
    >
      <Typography sx={accordionHeading}>Personal Info</Typography>
      <Box sx={formContainer}>
        <Alert severity="info">
          You need to log in again after changing your email...
        </Alert>
        {message.message && (
          <Alert
            onClose={() =>
              setMessage({
                message: "",
                status: 0,
              })
            }
            severity={message.status === 200 ? "success" : "error"}
          >
            {message.message}
          </Alert>
        )}
        <TextField
          type="text"
          variant="filled"
          label="Name"
          defaultValue={data?.name}
          {...register("name")}
          error={errors.name ? true : false}
          helperText={errors.name ? (errors.name.message as string) : ""}
        />
        <TextField
          type="email"
          variant="filled"
          label="Email"
          defaultValue={data?.email}
          {...register("email")}
          error={errors.email ? true : false}
          helperText={errors.email ? (errors.email.message as string) : ""}
        />
        <TextField
          type="password"
          variant="filled"
          label="Current Password"
          {...register("password")}
          error={errors.password ? true : false}
          helperText={
            errors.password ? (errors.password.message as string) : ""
          }
        />
      </Box>
      <Box sx={buttonContainer}>
        {isPending ? (
          <CircularProgress />
        ) : (
          <Button variant="contained" type="submit">
            Update Pesonal Info
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default UpdatePersonalInfoForm;
