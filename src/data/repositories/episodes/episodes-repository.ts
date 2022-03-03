import { Episode } from "../../../domain/models";

export interface EpisodesRepository {
  get(params: EpisodesRepository.GetParams): Promise<EpisodesRepository.GetResponse>;
}

export namespace EpisodesRepository {
  export type GetParams = string;
  export type GetResponse = Episode.Model[] | Episode.Model
}