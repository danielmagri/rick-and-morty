export namespace Pagination {
  export type Model<T> = {
    info: Info;
    results: T[];
  };

  export type Info = {
    count: number;
    next: string;
    prev: string;
    pages: number;
  };
}
