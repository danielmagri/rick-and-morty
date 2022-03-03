import { GetEpisodes } from ".";
import {
  Either,
  Failure,
  makeLeft,
  makeRight,
  UnknownFailure,
} from "../../../../core/models";
import { EpisodesRepository } from "../../../../data/repositories";

export class GetEpisodesImpl implements GetEpisodes {
  constructor(private readonly repository: EpisodesRepository) {}

  async get(params: GetEpisodes.Params): Promise<Either<GetEpisodes.Response>> {
    try {
      const result = await this.repository.get(params.join(","));
      return makeRight(Array.isArray(result) ? result : [result]);
    } catch (error) {
      if (error instanceof Failure) {
        return makeLeft(error);
      } else {
        return makeLeft(new UnknownFailure(error));
      }
    }
  }
}
