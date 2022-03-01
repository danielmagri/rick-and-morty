export namespace Character {
  export type Model = {
    id: number;
    name: string;
    image: string,
    status: StatusType;
    species: string;
    type: string;
    gender: GenderType;
    origin: Origin;
    created: string;
  };

  export type Origin = {
    name: string;
    url: string;
  };

  export enum StatusType {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
  }

  export enum GenderType {
    Female = "Female",
    Male = "Male",
    Genderless = "Genderless",
    Unknown = "unknown",
  }
}
