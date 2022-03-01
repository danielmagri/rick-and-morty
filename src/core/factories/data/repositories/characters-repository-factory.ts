import {
  CharactersRepository,
  CharactersRepositoryImpl,
} from "../../../../data/repositories";
import { makeHttpClient } from "../../infra";

export const makeCharactersRepository = (): CharactersRepository => {
  return new CharactersRepositoryImpl(makeHttpClient());
};
