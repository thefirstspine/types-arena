import { IInteraction } from "./game-interaction.interface";

export interface IInteractionChoseSquareOnBoard extends IInteraction {
  type: 'choseSquareOnBoard';
  params: {
    boardCoords: string[],
  };
}
