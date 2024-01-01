"use client";

import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { buttonBox, buttonStyle, loginForm, textField } from "../_authStyle";
import useLogin from "@/hooks/useLogin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginSection = () => {
  const { register, errors, handleSubmit, message, onSubmit } = useLogin();
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session]);

  return (
    <Box
      component="form"
      sx={loginForm}
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      {message && (
        <Alert
          severity={
            message === "Success login into your account" ? "success" : "error"
          }
        >
          {message}
        </Alert>
      )}
      <TextField
        label="Email"
        type="email"
        variant="filled"
        sx={textField}
        {...register("email")}
        error={errors.email ? true : false}
        helperText={errors.email ? errors.email.message : ""}
      />
      <TextField
        label="Password"
        type="password"
        variant="filled"
        sx={textField}
        {...register("password")}
        error={errors.password ? true : false}
        helperText={errors.password ? errors.password.message : ""}
      />
      <Box sx={buttonBox}>
        <Button type="submit" variant="contained" sx={buttonStyle}>
          Sign-in
        </Button>
        <Button sx={buttonStyle} color="secondary" variant="contained">
          Create account
        </Button>
      </Box>
    </Box>
  );
};

export default LoginSection;
