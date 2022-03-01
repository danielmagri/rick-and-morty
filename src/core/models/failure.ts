export abstract class Failure extends Error {
  constructor(public readonly message: string) {
    super(message);
  }
}

export class NoContentFailure<T> extends Failure {
  constructor() {
    super("No content");
  }
}

export class GenericHttpFailure<T> extends Failure {
  constructor(public readonly statusCode: number, public readonly body: T) {
    super(`HttpError ${statusCode}`);
  }
}

export class UnknownFailure<T> extends Failure {
  constructor(public readonly error: any) {
    super(error);
  }
}

export class EitherFailure<T> extends Failure {
  constructor() {
    super("Either error");
  }
}
