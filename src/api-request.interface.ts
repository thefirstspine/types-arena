export interface IApiRequest<T> {
  params: T;
  user: number;
  id?: number;
}
