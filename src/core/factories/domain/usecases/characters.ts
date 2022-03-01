import { GetCharacters, GetCharactersImpl } from "../../../../domain/usecases";
import { makeCharactersRepository } from "../../data";

export const makeGetCharacters = (): GetCharacters => {
  return new GetCharactersImpl(makeCharactersRepository());
};
