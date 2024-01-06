"use client";

import showPersonalInfoAction from "@/actions/showPersonalInfoAction";
import updatePersonalInfoAction from "@/actions/updatePersonalInfoAction";
import { updatePersonalInfoInputSchema } from "@/schema/updatePersonalInfoSchema";
import { UseUpdatePersonalInfoType } from "@/types/settingsType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useUpdatePersonalInfo = () => {
  const [message, setMessage] = useState("");

  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["userPersonalInfo"],
    queryFn: () => showPersonalInfoAction(),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      changedName,
      changedEmail,
      password,
    }: UseUpdatePersonalInfoType) =>
      updatePersonalInfoAction(changedName, changedEmail, password),
    onSuccess: (response) => {
      if (response?.message !== "Name updated successfully") {
        setMessage(
          "Personal info updated successfully, signing out in 5 seconds due to email change."
        );
        setTimeout(() => {
          signOut();
        }, 5000);
        return;
      }
      queryClient.invalidateQueries({
        queryKey: ["userPersonalInfo"],
      });
      setMessage("Personal info updated successfully!");
    },
    onError: (message) => {
      setMessage(message.message);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updatePersonalInfoInputSchema),
  });

  const onSubmit = (
    changedName: string,
    changedEmail: string,
    password: string
  ) => {
    mutate({
      changedName,
      changedEmail,
      password,
    });
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    message,
    data,
    isLoading,
    isPending,
    setMessage,
  };
};

export default useUpdatePersonalInfo;
