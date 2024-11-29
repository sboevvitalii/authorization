"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFormField } from "../ui/fields";
import { ButtonSubmit } from "../ui/button-submit";
import { right } from "@/shared/lib/either";
import { AuthFormLink } from "../ui/link";
import { ErrorAuthForm } from "../ui/error-auth-form";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Пожалуств заполните все поля");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Вы зарегистрировались", { email, password });
      router.push("/dashbord");
    } catch (error) {
      setError("Не полчучилось зарегестрироваться, По пробуйте еще раз");
    }
  };

  return (
    <AuthFormLayout
      title="Войти"
      description="Добро пожаловать! войдите в свой аккаунт"
      onSubmit={handleSubmit}
      fields={
        <AuthFormField
          login={email}
          onChangeLogin={setEmail}
          onChangePassword={setPassword}
          password={password}
        />
      }
      actions={<ButtonSubmit>Зарегистрироваться</ButtonSubmit>}
      error={<ErrorAuthForm error={right(null)} />}
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
