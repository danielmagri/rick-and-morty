import { CharactersRepository } from ".";
import { GetCharacters } from "../../../domain/usecases";
import { HttpClient } from "../../../infra";

export class CharactersRepositoryImpl implements CharactersRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async get(): Promise<GetCharacters.Response> {
    const response = await this.httpClient.request<GetCharacters.Response>({
      method: "get",
      path: "/character",
    });

    return response.body!;
  }
}
