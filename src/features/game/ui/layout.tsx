import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export function GameLayout({
  status,
  fiaeld,
  players,
}: {
  players?: React.ReactNode;
  status?: React.ReactNode;
  fiaeld?: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Кретики нолики 3 на 3</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {players}
        {status}
        <div className="flex items-center justify-center">{fiaeld}</div>
      </CardContent>
    </Card>
  );
}
