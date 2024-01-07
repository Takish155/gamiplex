"use client";

import showPersonalInfoAction from "@/actions/showPersonalInfoAction";
import updatePersonalInfoAction from "@/actions/updatePersonalInfoAction";
import { updatePersonalInfoInputSchema } from "@/schema/updatePersonalInfoSchema";
import { ActionMessage } from "@/types/actionMessage";
import { UseUpdatePersonalInfoType } from "@/types/settingsType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useUpdatePersonalInfo = () => {
  const [message, setMessage] = useState<ActionMessage>({
    message: "",
    status: 0,
  });

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
    onSettled: (response) => {
      setMessage({
        message: response!.message,
        status: response!.status,
      });
      if (response?.status === 200 && !response?.isChangedEmail) {
        queryClient.invalidateQueries({
          queryKey: ["userPersonalInfo"],
        });
      }
      if (response?.isChangedEmail) {
        setTimeout(() => {
          signOut();
        }, 5000);
      }
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
