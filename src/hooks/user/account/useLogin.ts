import { LoginSchemaType, loginSchema } from "@/schema/loginSchemta";
import { ActionMessage } from "@/types/actionMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useLogin = () => {
  const [message, setMessage] = useState<ActionMessage>({
    message: "",
    status: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    setIsLoading(true);
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((res) => {
      if (!res?.ok) {
        setMessage({
          message: "Invalid credentials, please try again.",
          status: 400,
        });
      } else {
        setMessage({
          message: "Login successful, redirecting...",
          status: 200,
        });
      }
      setIsLoading(false);
    });
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    message,
    isLoading,
  };
};
export default useLogin;
