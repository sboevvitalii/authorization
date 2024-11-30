import { userRepository } from "../repositories/userRepository";
import { sessionService } from "./session";

export const getCurrentUser = async () => {
  const { session } = await sessionService.verifySession();
  return userRepository.getUser({ id: session.id });
};
