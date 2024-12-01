import { removePassword } from "@/shared/lib/password";
import {
  GameEntity,
  GameIdleEntity,
  GameOverEntity,
  PlayerEntity,
} from "../domain";
import { GameId } from "@/kernel/ids";

async function gameList(where?: GameWhereInput): Promise<GameEntity[]> {
  const games = await game.findMane({
    include: {
      winner: true,
      players: true,
    },
  });
  return games.map(dbGameToGameEntity);
}

async function startGame(gameId: GameId, player: PlayerEntity) {
  return dbGameToGameEntity(
    await gameId.update({
      where: { id: gameId },
      data: {
        players: {
          connect: {
            id: player.id,
          },
        },
        status: "inProgress",
      },
      include: {
        winner: true,
        players: true,
      },
    })
  );
}

async function getGame(where?: GameWhereInput) {
  const game = await game.findFirst({
    include: {
      winner: true,
      players: true,
    },
  });
  if (game) {
    return dbGameToGameEntity(game);
  }
  return undefined;
}

async function createGame(game: GameIdleEntity): Promise<GameEntity> {
  const createdGame = await game.create({
    data: {
      status: game.status,
      id: game.id,
      field: game.field,
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

export const gameRepository = { gameList, createGame, getGame, startGame };
