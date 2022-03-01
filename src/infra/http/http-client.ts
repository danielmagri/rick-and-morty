export interface HttpClient {
  request: <R = any>(params: Http.Request) => Promise<Http.Response<R>>;
}

export namespace Http {
  export type Method = "get";

  export type Request = {
    path: string;
    method: Method;
    data?: any;
    params?: any;
  };

  export enum StatusCode {
    Ok = 200,
    NoContent = 204,
    BadRequest = 400,
    NotFound = 404,
    ServerError = 500,
  }

  export type Response<T = any> = {
    statusCode: StatusCode;
    body?: T;
  };
}
