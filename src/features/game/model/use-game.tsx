import { GameDomain } from "@/entities/game";
import { GameId } from "@/kernel/ids";
import { routes } from "@/kernel/routes";
import { useEventSource } from "@/shared/lib/SSE/client";

export function useGame(gameId: GameId) {
  const { isPending, dataStream } = useEventSource<GameDomain.GameEntity>(
    routes.gameStream(gameId)
  );

  return {
    game: dataStream,
    isPending,
  };
}
