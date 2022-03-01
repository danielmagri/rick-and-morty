import { Character, Pagination } from "../../../models";

export interface GetCharacters {
  get(params: GetCharacters.Params): Promise<GetCharacters.Response>;
}

export namespace GetCharacters {
  export type Params = {
    page: number;
  };
  
  export type Response = Pagination.Model<Character.Model>;
}
