import { left, right } from "@/shared/lib/either";
import { userRepository } from "../repositories/userRepository";
import { passwordServise } from "./password";

export async function verifyUserPassword({
  login,
  password,
}: {
  login: string;
  password: string;
}) {
  const user = await userRepository.getUser({ login });

  if (!user) {
    return left("wrong-login-or-password" as const);
  }

  const isCompare = await passwordServise.comparePasswords({
    hash: user.passworHash,
    salt: user.salt,
    password,
  });
  if (!isCompare) {
    return left("wrong-login-or-password" as const);
  }
  return right(user);
}
