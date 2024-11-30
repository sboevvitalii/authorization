"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFormField } from "../ui/fields";
import { ButtonSubmit } from "../ui/button-submit";
import { AuthFormLink } from "../ui/link";
import { ErrorAuthForm } from "../ui/error-auth-form";
import { signInAction, SignInFormState } from "../action/sign-in";
import { useActionState } from "@/shared/lib/react-CRUTCH";

export function SignInForm() {
  const [formState, action, isPanding] = useActionState(
    signInAction,
    {} as SignInFormState
  );

  return (
    <AuthFormLayout
      title="Войти"
      description="Добро пожаловать! войдите в свой аккаунт"
      action={action}
      fields={<AuthFormField {...formState} />}
      actions={<ButtonSubmit isPending={isPanding}>Войти</ButtonSubmit>}
      error={<ErrorAuthForm error={formState.errors?._errors} />}
      link={
        <AuthFormLink
          text="У вас нет аккаунта?"
          linkText="Зарегистрироваться"
          url="/sign-up"
        />
      }
    />
  );
}
