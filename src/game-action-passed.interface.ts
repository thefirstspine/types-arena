import { IGameInteraction } from "./game-interaction.interface";
import { IGameAction } from "./game-action.interface";

export interface IGameActionPassed<T extends IGameInteraction> extends IGameAction<T> {
  passedAt: number;
}
