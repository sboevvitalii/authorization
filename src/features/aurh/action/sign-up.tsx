import { left } from "@/shared/lib/either";

export const signUpAction = async (state: unknown, formData: FormData) => {
  return left("login-allready-taken" as const);
};
