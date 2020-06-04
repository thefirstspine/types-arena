import { IGameInteraction } from "./game-interaction.interface";

export interface IInteractionChoseCardInHand extends IGameInteraction {
  type: 'choseCardInHand';
  params: {
    handIndexes: number[],
  };
}
