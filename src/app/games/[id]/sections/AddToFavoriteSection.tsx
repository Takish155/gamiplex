"use client";

import useFavoriteAction from "@/hooks/user/useFavoriteAction";
import { FetchGameInfoType } from "@/types/getGameInfoType";
import { Alert, Button } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AddToFavoriteSection = ({ data }: { data: FetchGameInfoType }) => {
  const session = useSession();
  const { addToFavorite, message } = useFavoriteAction(data);
  const { mutate, isPending } = addToFavorite;

  if (session.status === "loading") return null;
  if (!data) {
    return null;
  }
  if (session.status === "unauthenticated")
    return (
      <Button
        variant="outlined"
        sx={{ margin: "1rem auto" }}
        LinkComponent={Link}
        href="/auth/login"
      >
        Sign in to add to your favorites
      </Button>
    );
  if (session.status === "authenticated") {
    return (
      <>
        <Button
          sx={{ margin: "1rem auto" }}
          variant="contained"
          onClick={() => mutate()}
          disabled={isPending}
        >
          Add to Favorites
        </Button>
        {message && (
          <Alert
            severity={
              message === "Game added to your favorite list"
                ? "success"
                : "error"
            }
          >
            {message}
          </Alert>
        )}
      </>
    );
  }
};

export default AddToFavoriteSection;
