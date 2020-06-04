import { IGameUser } from "./game-user.interface";

export interface IApiQueueResponse {
  gameType: string;
  queue: IGameUser[];
}
