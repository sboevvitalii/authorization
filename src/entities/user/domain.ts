import { UserId } from "@/kernel/ids";

export type UserEntity = {
  id: UserId;
  login: string;
  rating: number;
  passworHash: string;
  salt: string;
};

export type SessionEntity = {
  id: string;
  login: string;
  expiredAt: string;
};

export const DEFAULT_RATING = 1000;

export const userToSession = (
  user: UserEntity,
  expiredAt: string
): SessionEntity => {
  return { id: user.id, login: user.login, expiredAt };
};
