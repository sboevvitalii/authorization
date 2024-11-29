import { GameId, UserId } from "@/kernel/ids";

export type GameEntity =
  | GameIdleEntity
  | GameInProgressEntity
  | GameOverEntity
  | GameOverDrowEntity;

export type GameIdleEntity = {
  id: GameId;
  creator: PlayerEntity;
  status: "idle";
};

export type GameInProgressEntity = {
  id: GameId;
  players: PlayerEntity[];
  field: Field[];
  status: "inProgres";
};

export type GameOverEntity = {
  id: GameId;
  players: PlayerEntity[];
  field: Field;
  status: "gameOver";
  winner?: PlayerEntity;
};
export type GameOverDrowEntity = {
  id: GameId;
  players: PlayerEntity[];
  field: Field;
  status: "gameOverDraw";
};

export type PlayerEntity = {
  id: UserId;
  login: string;
  rating: number;
};

export type Field = Cell[];
export type Cell = GameSymbol | null;
export type GameSymbol = string;
