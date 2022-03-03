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

  export type Response<T = any> = {
    statusCode: number;
    body?: T;
  };
}
