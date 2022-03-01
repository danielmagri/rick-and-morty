import { Character, Pagination } from "../../../models";
import { Either } from "../../../../core/models";

export interface GetCharacters {
  get(
    params: GetCharacters.Params
  ): Promise<Either<GetCharacters.Response>>;
}

export namespace GetCharacters {
  export type Params = {
    page: number;
    name?: string;
    gender?: Character.GenderType;
    status?: Character.StatusType;
  };

  export type Response = Pagination.Model<Character.Model>;
}
