import { Episode } from "../../../models";
import { Either } from "../../../../core/models";

export interface GetEpisodes {
  get(params: GetEpisodes.Params): Promise<Either<GetEpisodes.Response>>;
}

export namespace GetEpisodes {
  export type Params = number[];

  export type Response = Episode.Model[];
}
