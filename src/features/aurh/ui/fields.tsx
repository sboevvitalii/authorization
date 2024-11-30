import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useId } from "react";

export function AuthFormField({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: { login?: string; password?: string };
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
          name="login"
          placeholder="введите свой email"
          required
          defaultValue={formData?.get("login")?.toString()}
        />
        {errors?.login && <div>{errors.login}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor={passwordId}>Пароль</Label>
        <Input
          id={passwordId}
          type="password"
          name="password"
          placeholder="введите свой пароль"
          required
          defaultValue={formData?.get("password")?.toString()}
        />
        {errors?.password && <div>{errors.password}</div>}
      </div>
    </>
  );
}
