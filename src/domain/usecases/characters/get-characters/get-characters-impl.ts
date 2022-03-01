import { GetCharacters } from ".";
import { CharactersRepository } from "../../../../data/repositories";

export class GetCharactersImpl implements GetCharacters {
  constructor(private readonly repository: CharactersRepository) {}

  async get(): Promise<GetCharacters.Response> {
    return this.repository.get();
  }
}
