export interface BackendResponse<T> {
  data: T;
  message: string;
  statusCode: number;
}
export interface BusinessList {
  id: number;
  name: string;
  nit: number;
  mail: string;
  isActive: boolean;
}
