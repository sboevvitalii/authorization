import { getGameDyId } from "@/entities/game/server";
import { GameId } from "@/kernel/ids";
import { sseStream } from "@/shared/lib/SSE/server";
import { NextRequest } from "next/server";

export async function getGameStream(
  req: NextRequest,
  { params }: { params: Promise<{ id: GameId }> }
) {
  const { id } = await params;

  const game = await getGameDyId(id);

  if (!game) {
    return new Response(`Game not found`, {
      status: 404,
    });
  }

  const { response, write, addCloseListener } = sseStream(req);

  write(game);

  addCloseListener(() => {});

  return response;
}
