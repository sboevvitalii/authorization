"use client";
import { useEffect, useState } from "react";

export function useEventSource<T>(url: string) {
  const [isPending, setIsPending] = useState(true);
  const [gameData, setGameData] = useState<T>();
  const [error, setError] = useState<unknown | undefined>(null);

  useEffect(() => {
    const gameEvents = new EventSource(url);

    gameEvents.addEventListener("message", (message) => {
      try {
        setIsPending(false);
        setError(null);
        setGameData(JSON.parse(message.data));
      } catch (e) {
        setError(e);
      }
    });
    gameEvents.addEventListener("error", (e) => {
      setError(e);
    });
    return () => gameEvents.close();
  }, [url]);
  return { dataStream: gameData, error, isPending };
}
