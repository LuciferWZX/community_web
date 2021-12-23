export enum RequestCode {
  NoRes = -1,
  Ok = 0,
}
export interface ResType<T> {
  code: number | RequestCode;
  msg: string;
  data: T;
}
export enum StoreKey {
  Token = "token",
}
