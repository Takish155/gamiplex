"use client";

import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { buttonBox, buttonStyle, loginForm, textField } from "../_authStyle";
import useRegister from "@/hooks/user/account/useRegister";
import { Alert, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const RegisterSection = () => {
  const {
    register,
    errors,
    handleSubmit,
    onSubmit,
    message,
    setMessage,
    mutation,
  } = useRegister();
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/user");
    }
  }, [session, router]);

  return (
    <Box
      component="form"
      sx={loginForm}
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      {message.message && (
        <Alert
          severity={message.status === 200 ? "success" : "error"}
          onClose={() =>
            setMessage({
              status: 0,
              message: "",
            })
          }
        >
          {message.message}
        </Alert>
      )}
      <TextField
        label="Name"
        type="text"
        variant="filled"
        sx={textField}
        error={errors.name ? true : false}
        helperText={errors.name ? errors.name.message : ""}
        {...register("name")}
      />
      <TextField
        label="Email"
        type="email"
        variant="filled"
        sx={textField}
        error={errors.email ? true : false}
        helperText={errors.email ? errors.email.message : ""}
        {...register("email")}
      />
      <TextField
        label="Password"
        type="password"
        variant="filled"
        sx={textField}
        error={errors.password ? true : false}
        helperText={errors.password ? errors.password.message : ""}
        {...register("password")}
      />
      <TextField
        label="Password again"
        type="password"
        variant="filled"
        sx={textField}
        error={errors.passwordAgain ? true : false}
        helperText={errors.passwordAgain ? errors.passwordAgain.message : ""}
        {...register("passwordAgain")}
      />
      <Box sx={buttonBox}>
        {mutation.isPending ? (
          <CircularProgress />
        ) : (
          <Button type="submit" variant="contained" sx={buttonStyle}>
            Create account
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default RegisterSection;
