import { IInteraction } from "./game-interaction.interface";

export interface IInteractionChoseCardInHand extends IInteraction {
  type: 'choseCardInHand';
  params: {
    handIndexes: number[],
  };
}
