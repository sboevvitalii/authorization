"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFormField } from "../ui/fields";
import { ButtonSubmit } from "../ui/button-submit";
import { right } from "@/shared/lib/either";
import { AuthFormLink } from "../ui/link";
import { ErrorAuthForm } from "../ui/error-auth-form";
import { useActionState } from "@/shared/lib/react-CRUTCH";
import { signUpAction } from "../action/sign-up";

export function SignUpForm() {
  const [formState, action, isPanding] = useActionState(
    signUpAction,
    right(undefined)
  );

  return (
    <AuthFormLayout
      title="Зарегистрироваться"
      description="Пройдите регистрицию своего аккаунта"
      action={action}
      fields={<AuthFormField />}
      actions={
        <ButtonSubmit isPending={isPanding}>Зарегистрироваться</ButtonSubmit>
      }
      error={<ErrorAuthForm error={formState} />}
      link={
        <AuthFormLink
          text="У вас уже есть аккаунт?"
          linkText="Войти"
          url="/sign-in"
        />
      }
    />
  );
}
