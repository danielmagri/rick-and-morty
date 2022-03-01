import { GetCharacters } from "../../../domain/usecases";

export interface CharactersRepository {
  get(): Promise<GetCharacters.Response>;
}
