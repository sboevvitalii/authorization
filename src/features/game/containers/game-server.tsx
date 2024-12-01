"use client";

import { GameId } from "@/kernel/ids";
import { GameClient } from "./game-client";
import { getCurrentUser } from "@/entities/user/server";
import { getGameDyId, startGame } from "@/entities/game/server";
import { gameEvents } from "../services/game-event-service";

export async function GameServer({ gameId }: { gameId: GameId }) {
  const user = await getCurrentUser();

  let game = await getGameDyId(gameId);

  if (user) {
    const startGameResult = await startGame(gameId, user);

    if (startGameResult.type === "success") {
      gameEvents.emit(startGameResult.value);
    }
  }
  return <GameClient gameId={gameId} />;
}
