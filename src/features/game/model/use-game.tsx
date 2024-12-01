import { GameDomain } from "@/entities/game";
import { GameId } from "@/kernel/ids";
import { useEventSource } from "@/shared/lib/SSE/client";

export function useGame(gameId: GameId) {
  const { isPending, dataStream } = useEventSource<GameDomain.GameEntity>(
    `/game/${gameId}/stream`
  );

  return {
    game: dataStream,
    isPending,
  };
}
