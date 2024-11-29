import { Either, matchEither } from "@/shared/lib/either";
import { Alert, AlertDescription } from "@/shared/ui/alert";

export function ErrorAuthForm({ error }: { error: Either<string, unknown> }) {
  return matchEither(error, {
    left: (error) => (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    ),
    right: () => null,
  });
}
