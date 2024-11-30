import { removePassword } from "@/shared/lib/password";
import { GameEntity, GameIdleEntity, GameOverEntity } from "../domain";

async function gameList(where?: GameWhereInput): Promise<GameEntity[]> {
  const games = await game.findMane({
    include: {
      winner: true,
      players: true,
    },
  });
  return games.map(dbGameToGameEntity);
}

async function createGame(game: GameIdleEntity): Promise<GameEntity> {
  const createdGame = await game.create({
    data: {
      status: game.status,
      id: game.id,
      field: Array(9).fill(null),
      players: {
        connect: { id: game.creator.id },
      },
    },
    include: {
      winner: true,
      players: true,
    },
  });
  return dbGameToGameEntity(createdGame);
}

function dbGameToGameEntity(
  game: Game & {
    players: User[];
    winner?: User[] | null;
  }
): GameEntity {
  const players = game.players.map(removePassword);
  switch (game.status) {
    case "idle": {
      const [creator] = players;
      if (!creator) {
        throw new Error("Creator shold be in game over");
      }
      return {
        id: game.id,
        creator: creator,
        status: game.status,
        field: game.field,
      } satisfies GameIdleEntity;
    }
    case "inProgres":
    case "gameOverDraw": {
      return {
        id: game.id,
        players: players,
        status: game.status,
        field: game.field,
      };
    }
    case "gameOver": {
      if (!game.winner) {
        throw new Error("Winner shold be in game over");
      }
      return {
        id: game.id,
        players: players,
        status: game.status,
        field: game.field,
        winner: removePassword(game.winner),
      } satisfies GameOverEntity;
    }
  }
}

export const gameRepository = { gameList, createGame };
