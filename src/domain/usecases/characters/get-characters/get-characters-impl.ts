import { GetCharacters } from ".";
import {
  Either,
  Failure,
  makeLeft,
  makeRight,
  UnknownFailure,
} from "../../../../core/models";
import { CharactersRepository } from "../../../../data/repositories";

export class GetCharactersImpl implements GetCharacters {
  constructor(private readonly repository: CharactersRepository) {}

  async get(
    params: GetCharacters.Params
  ): Promise<Either<GetCharacters.Response>> {
    try {
      const result = await this.repository.get(params);
      return makeRight(result);
    } catch (error) {
      if (error instanceof Failure) {
        return makeLeft(error);
      } else {
        return makeLeft(new UnknownFailure(error));
      }
    }
  }
}
