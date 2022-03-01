import { Http, HttpClient } from "./http-client";
import axios, { AxiosError } from "axios";
import { env } from "../../core/env";
import {
  GenericHttpFailure,
  NoContentFailure,
  UnknownFailure,
} from "../../core/models";

export class HttpClientImpl implements HttpClient {
  async request<R = any>(params: Http.Request): Promise<Http.Response<R>> {
    try {
      const response = await axios.request({
        baseURL: env.baseUrl,
        url: params.path,
        data: params.data,
        params: params.params,
      });

      return {
        statusCode: response.status,
        body: response.data,
      };
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          throw new NoContentFailure();
        } else {
          throw new GenericHttpFailure(
            error.response!.status,
            error.response!.data
          );
        }
      } else {
        throw new UnknownFailure(error);
      }
    }
  }
}
