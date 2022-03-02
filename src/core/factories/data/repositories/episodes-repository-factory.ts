import {
  EpisodesRepository,
  EpisodesRepositoryImpl,
} from "../../../../data/repositories";
import { makeHttpClient } from "../../infra";

export const makeEpisodesRepository = (): EpisodesRepository => {
  return new EpisodesRepositoryImpl(makeHttpClient());
};
