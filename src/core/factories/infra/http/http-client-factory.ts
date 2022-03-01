import { HttpClient, HttpClientImpl } from "../../../../infra";

export const makeHttpClient = (): HttpClient => {
  return new HttpClientImpl();
};
