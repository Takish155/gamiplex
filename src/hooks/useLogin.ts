import { LoginSchemaType, loginSchema } from "@/schema/loginSchemta";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const useLogin = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((res) => {
      if (!res?.ok) {
        setMessage("Invalid email or password");
      } else {
        setMessage("Success login into your account");
      }
    });
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    message,
  };
};
export default useLogin;
