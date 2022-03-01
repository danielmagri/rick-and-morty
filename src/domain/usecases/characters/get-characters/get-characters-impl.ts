import { GetCharacters } from ".";
import { CharactersRepository } from "../../../../data/repositories";

export class GetCharactersImpl implements GetCharacters {
  constructor(private readonly repository: CharactersRepository) {}

  async get(params: GetCharacters.Params): Promise<GetCharacters.Response> {
    return this.repository.get(params);
  }
}
