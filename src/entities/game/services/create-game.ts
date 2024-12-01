import { left, right } from "@/shared/lib/either";
import { PlayerEntity } from "../domain";
import { gameRepository } from "../repositories/game-repository";

export async function createGame(player: PlayerEntity) {
  const playerGames = await gameRepository.gameList({
    players: { some: { id: player.id } },
    status: "idle",
  });

  const isGameInIdleStatus = playerGames.some(
    (game) => game.status === "idle" && game.creator.id === player.id
  );
  if (isGameInIdleStatus) {
    return left("can-create-only-one-game" as const);
  }

  const createdGame = await gameRepository.createGame({
    id: String(Math.random()),
    creator: player,
    status: "idle",
    field: Array(9).fill(null),
  });

  return right(createdGame);
}
