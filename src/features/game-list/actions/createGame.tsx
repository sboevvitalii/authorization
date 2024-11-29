"use server";

import { createGame } from "@/entities/game/server";
import { left } from "@/shared/lib/either";
import { redirect } from "next/navigation";

export const createGameAction = async () => {
  const user = await user.findFirst();

  if (!user) {
    return left("user-not-found" as const);
  }
  const gameResult = await createGame(user);

  if (gameResult.type === "success") {
    redirect(`/game/${gameResult.value.id}`);
  }
  return gameResult;
};
