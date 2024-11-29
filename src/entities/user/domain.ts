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
};

export const DEFAULT_RATING = 1000;
