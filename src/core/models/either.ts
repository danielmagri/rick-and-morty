import { Failure, EitherFailure } from ".";

type Left = {
  left: Failure;
  right?: never;
};

type Right<T> = {
  left?: never;
  right: T;
};

export type Either<T> = NonNullable<Left | Right<T>>;

export const makeLeft = (value: Failure): Left => ({ left: value });

export const makeRight = <U>(value: U): Right<U> => ({ right: value });

export const handleEither = <T>(
  e: Either<T>,
  success: (data: T) => void,
  error: (error: Failure) => void
) => {
  if (e.right !== undefined) {
    success(e.right);
  } else if (e.left !== undefined) {
    error(e.left);
  } else {
    error(new EitherFailure());
  }
};
