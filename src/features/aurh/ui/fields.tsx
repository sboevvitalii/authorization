import { Alert, AlertDescription } from "@/shared/ui/alert";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useId } from "react";

export function AuthFormField({
  login,
  password,
  onChangeLogin,
  onChangePassword,
}: {
  login: string;
  password: string;
  onChangeLogin: (login: string) => void;
  onChangePassword: (password: string) => void;
}) {
  const loginId = useId();
  const passwordId = useId();
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={loginId}>Email</Label>
        <Input
          id={loginId}
          type="login"
          placeholder="введите свой email"
          value={login}
          onChange={(e) => onChangeLogin(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={passwordId}>Пароль</Label>
        <Input
          id={passwordId}
          type="password"
          placeholder="введите свой пароль"
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
          required
        />
      </div>
    </>
  );
}
