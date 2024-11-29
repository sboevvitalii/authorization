import { left, right } from "@/shared/lib/either";
import { userRepository } from "../repositories/userRepository";
import { DEFAULT_RATING } from "../domain";
import { passwordServise } from "./password";

export const createUser = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  const userWithLogin = await userRepository.getUser({ login });

  if (userWithLogin) {
    return left("user-login-exists" as const);
  }

  const { hash, salt } = await passwordServise.hashPassword(password);

  const user = await userRepository.saveUser({
    id: String(Math.random()),
    login,
    rating: DEFAULT_RATING,
    passworHash: hash,
    salt,
  });

  return right(user);
};
