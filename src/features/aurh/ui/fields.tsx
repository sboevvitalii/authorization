import { Alert, AlertDescription } from "@/shared/ui/alert";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useId } from "react";

export function AuthFormField() {
  const loginId = useId();
  const passwordId = useId();
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={loginId}>Email</Label>
        <Input
          id={loginId}
          type="login"
          name="login"
          placeholder="введите свой email"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={passwordId}>Пароль</Label>
        <Input
          id={passwordId}
          type="password"
          name="password"
          placeholder="введите свой пароль"
          required
        />
      </div>
    </>
  );
}
