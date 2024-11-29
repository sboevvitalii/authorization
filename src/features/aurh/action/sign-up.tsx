import { createUser } from "@/entities/user/server";
import { left, mapEitherLeft } from "@/shared/lib/either";
import { error } from "console";
import { z } from "zod";

const formDataSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(3),
});

export const signUpAction = async (state: unknown, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    return left(`${result.error.message}`);
  }

  const createUserResult = await createUser(result.data);
  return mapEitherLeft(createUserResult, (error) => {
    return {
      "user-login-exists": "Пользователь с таким login существует",
    }[error];
  });
};
