import { sessionService } from "@/entities/user/server";
import { Button } from "@/shared/ui/button";
import { redirect } from "next/navigation";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = await sessionService.verifySession();
  return (
    <div className="flex flex-col grow">
      <header className="px-10 py-4 flex flex-row justify-between items-center border-b border-b-primary/50">
        <div className="text-xl">Tic-Tak-Toy</div>
        <div className="flex gap-4 items-center">
          <div className="text-lg">{session.login}</div>
          <form
            action={async () => {
              "use server";
              sessionService.deleteSession();
              redirect("/sign-in");
            }}
          >
            <Button>Выйти</Button>
          </form>
        </div>
      </header>
      {children}
    </div>
  );
}
