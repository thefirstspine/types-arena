import { IGameUser } from "./game-user.interface";

export interface IApiQueueResponse {
  key: string;
  queue: IGameUser[];
}
