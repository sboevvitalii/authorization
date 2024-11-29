import { UserEntity } from "../domain";

export function saveUser(user: UserEntity): Promise<UserEntity> {
  return user.upsert({
    where: {
      id: user.id,
    },
    create: user,
    update: user,
  });
}

export function getUser(where: UserWhereInput) {
  return userRepository.faindFirst({ where });
}

export const userRepository = { saveUser, getUser };
