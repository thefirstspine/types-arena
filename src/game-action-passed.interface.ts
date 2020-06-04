import { IInteraction } from "./game-interaction.interface";
import { IGameAction } from "./game-action.interface";

export interface IGameActionPassed<T extends IInteraction> extends IGameAction<T> {
  passedAt: number;
}
