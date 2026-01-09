// types.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ErrorResponse {
  code: number;
  message: string;
}

export interface ApiRequest {
  headers: { [key: string]: string };
  params: { [key: string]: string };
  body: any;
}

export interface ApiResponse {
  status: number;
  data: any;
  error?: ErrorResponse;
}

export enum HttpMethod {
  GET,
  POST,
  PUT,
  DELETE,
}

export interface ApiEndpoint {
  method: HttpMethod;
  path: string;
  handler: (request: ApiRequest) => ApiResponse;
}