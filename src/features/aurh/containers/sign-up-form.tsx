"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFormField } from "../ui/fields";
import { ButtonSubmit } from "../ui/button-submit";
import { AuthFormLink } from "../ui/link";
import { ErrorAuthForm } from "../ui/error-auth-form";
import { useActionState } from "@/shared/lib/react-CRUTCH";
import { signUpAction, SignUpFormState } from "../action/sign-up";
import { routes } from "@/kernel/routes";

export function SignUpForm() {
  const [formState, action, isPanding] = useActionState(
    signUpAction,
    {} as SignUpFormState
  );

  return (
    <AuthFormLayout
      title="Зарегистрироваться"
      description="Пройдите регистрицию своего аккаунта"
      action={action}
      fields={<AuthFormField {...formState} />}
      actions={
        <ButtonSubmit isPending={isPanding}>Зарегистрироваться</ButtonSubmit>
      }
      error={<ErrorAuthForm error={formState.errors?._errors} />}
      link={
        <AuthFormLink
          text="У вас уже есть аккаунт?"
          linkText="Войти"
          url={routes.signIn()}
        />
      }
    />
  );
}
