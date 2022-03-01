import { GetCharacters } from "../../../domain/usecases";

export interface CharactersRepository {
  get(params: GetCharacters.Params): Promise<GetCharacters.Response>;
}
