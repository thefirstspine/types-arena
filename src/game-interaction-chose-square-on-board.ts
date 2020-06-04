import { IGameInteraction } from "./game-interaction.interface";

export interface IInteractionChoseSquareOnBoard extends IGameInteraction {
  type: 'choseSquareOnBoard';
  params: {
    boardCoords: string[],
  };
}
