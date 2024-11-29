import { getIdleGames } from "@/entities/game/server";
import { Layout } from "../ui/layout";
import { GameCard } from "../ui/GameCard";
import { ButtonCreateForm } from "../actions/ButtonCreateForm";

export async function GameList() {
  const games = await getIdleGames();

  return (
    <Layout actions={<ButtonCreateForm /**action={} */ />}>
      {games.map((game) => (
        <GameCard
          key={game.id}
          login={game.creator.login}
          rating={game.creator.rating}
        />
      ))}
    </Layout>
  );
}
