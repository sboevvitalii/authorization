import { Button } from "@/shared/ui/button";

export function ButtonSubmit({
  children,
  isPending,
}: {
  children: React.ReactNode;
  isPending?: boolean;
}) {
  return (
    <Button disabled={isPending} type="submit" className="w-full">
      {children}
    </Button>
  );
}
