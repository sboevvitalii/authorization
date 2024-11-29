/*Манада(Either) айзер (не настоящая манада, юнион из двух типов) */

export type Left<E> = {
  type: "error";
  error: E;
};

export type Right<V> = {
  type: "success";
  value: V;
};

export type Either<E, V> = Left<E> | Right<V>;

export const left = <E>(error: E): Left<E> => ({
  error,
  type: "error",
});

export const right = <V>(value: V): Right<V> => ({
  type: "success",
  value: value,
});

export const mapEitherRight = <V, V2, E = unknown>(
  either: Either<E, V>,
  fn: (value: V) => V2
): Either<E, V2> => {
  if (either.type === "success") {
    return right(fn(either.value));
  }
  return either;
};
export const mapEitherLeft = <V, E, E2 = unknown>(
  either: Either<E, V>,
  fn: (value: E) => E2
): Either<E2, V> => {
  if (either.type === "error") {
    return left(fn(either.error));
  }

  return either;
};

export const matchEither = <E, V, T>(
  either: Either<E, V>,
  mathers: {
    left: (error: E) => T;
    right: (value: V) => T;
  }
): T => {
  if (either.type === "error") {
    return mathers.left(either.error);
  }
  return mathers.right(either.value);
};
