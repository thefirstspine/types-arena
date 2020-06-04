import { IGameInteraction } from "./game-interaction.interface";

export interface IInteractionMoveCardToDiscard extends IGameInteraction {
  type: 'moveCardsToDiscard';
  params: {
    min: number,
    max: number,
    handIndexes: number[],
  };
}
