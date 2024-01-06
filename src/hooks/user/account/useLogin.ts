import { LoginSchemaType, loginSchema } from "@/schema/loginSchemta";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
        setMessage("Invalid credentials");
      }
    });
  };

  const signInMutation = useMutation({
    mutationFn: async ({ email, password }: LoginSchemaType) =>
      onSubmit({ email, password }),
  });

  return {
    register,
    handleSubmit,
    signInMutation,
    errors,
    message,
  };
};
export default useLogin;
