"use client";

import { GameDomain } from "@/entities/game";

export function GameField({
  game,
  onCellClick,
}: {
  game: GameDomain.GameEntity;
  onCellClick?: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-3">
      {game.field.map((symbol, index) => (
        <button
          onClick={() => onCellClick?.(index)}
          key={index}
          className="flex justify-center items-center border border-primary w-10 h-10 "
        >
          {symbol ?? ""}
        </button>
      ))}
    </div>
  );
}
