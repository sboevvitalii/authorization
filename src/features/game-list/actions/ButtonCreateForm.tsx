"use client";

import { Button } from "@/shared/ui/button";
import { createGameAction } from "./createGame";
import { useActionState } from "@/shared/lib/react-CRUTCH";
import { mapEitherLeft, right } from "@/shared/lib/either";
import { startTransition } from "react";

export function ButtonCreateForm() {
  const [data, dispatch, isPanding] = useActionState(
    createGameAction,
    right(undefined)
  );
  return (
    <Button
      disabled={isPanding}
      onClick={() => startTransition(dispatch)}
      error={mapEitherLeft(
        data,
        (error) =>
          ({
            ["can-create-only-one-game"]: "Вы можете создать только одну игру",
            ["user-not-found"]: "Пользователя нет",
          }[error])
      )}
    >
      Создать игру;
    </Button>
  );
}
