import { GetEpisodes, GetEpisodesImpl } from "../../../../domain/usecases";
import { makeEpisodesRepository } from "../../data";

export const makeGetEpisodes = (): GetEpisodes => {
  return new GetEpisodesImpl(makeEpisodesRepository());
};
