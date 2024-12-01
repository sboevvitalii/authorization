import { GameId } from "@/kernel/ids";
import { gameRepository } from "../repositories/game-repository";

export async function getGameDyId(gameId: GameId) {
  return gameRepository.getGame({ id: gameId });
}
