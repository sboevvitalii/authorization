import { getIdleGames } from "@/entities/game/server";
import { Layout } from "../ui/layout";
import { GameCard } from "../ui/game-card";
import { ButtonCreateForm } from "../actions/ButtonCreateForm";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { routes } from "@/kernel/routes";

export async function GameList() {
  const games = await getIdleGames();

  return (
    <Layout actions={<ButtonCreateForm /**action={} */ />}>
      {games.map((game) => (
        <GameCard
          key={game.id}
          login={game.creator.login}
          rating={game.creator.rating}
          astions={
            <Link href={routes.game(game.id)}>
              <Button>Подключится</Button>
            </Link>
          }
        />
      ))}
    </Layout>
  );
}
