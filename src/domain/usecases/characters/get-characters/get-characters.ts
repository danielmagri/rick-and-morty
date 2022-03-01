import { Character, Pagination } from "../../../models";

export interface GetCharacters {
  get(): Promise<GetCharacters.Response>;
}

export namespace GetCharacters {
  export type Response = Pagination.Model<Character.Model>;
}
