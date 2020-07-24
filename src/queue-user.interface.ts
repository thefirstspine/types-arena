import { IGameUser } from "./game-user.interface";

export interface IQueueUser extends IGameUser {
  queueExpiresAt: number;
  queueEnteredAt: number;
}