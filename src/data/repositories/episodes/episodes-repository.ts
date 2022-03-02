import { GetEpisodes } from "../../../domain/usecases";

export interface EpisodesRepository {
  get(params: EpisodesRepository.GetParams): Promise<GetEpisodes.Response>;
}

export namespace EpisodesRepository {
  export type GetParams = string;
}