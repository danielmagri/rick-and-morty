import { EpisodesRepository } from ".";
import { GetEpisodes } from "../../../domain/usecases";
import { HttpClient } from "../../../infra";

export class EpisodesRepositoryImpl implements EpisodesRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async get(params: EpisodesRepository.GetParams): Promise<GetEpisodes.Response> {
    const response = await this.httpClient.request<GetEpisodes.Response>({
      method: "get",
      path: "/episode/" + params,
    });

    return response.body!;
  }
}
