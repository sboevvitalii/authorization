import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

export function AuthFormLayout({
  actions,
  description,
  fields,
  link,
  title,
  onSubmit,
  error,
}: {
  title: string;
  description: string;
  fields: React.ReactNode;
  actions: React.ReactNode;
  link: React.ReactNode;
  error: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <Card className="w-full max-w-md font-bold text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          {fields}
          {error}
          {actions}
        </form>
      </CardContent>

      <CardFooter className="flex justify-center">{link}</CardFooter>
    </Card>
  );
}
