import { Http, HttpClient } from "./http-client";
import axios, { AxiosResponse } from "axios";
import { env } from "../../core/env";

export class HttpClientImpl implements HttpClient {
  async request<R = any>(params: Http.Request): Promise<Http.Response<R>> {
    let response: AxiosResponse;
    try {
      response = await axios.request({
        baseURL: env.baseUrl,
        url: params.path,
        data: params.data,
        params: params.params,
      });
    } catch (error) {
      response = (error as any).response;
    }

    return {
      statusCode: response.status,
      body: response.data,
    };
  }
}
