export namespace Pagination {
  export type Model<T> = {
    info: Info;
    results: T[];
  };

  export type Info = {
    count: number;
    pages: number;
  };
}
