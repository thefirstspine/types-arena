import { IInteraction } from "./game-interaction.interface";

export interface IInteractionMoveCardToDiscard extends IInteraction {
  type: 'moveCardsToDiscard';
  params: {
    min: number,
    max: number,
    handIndexes: number[],
  };
}
