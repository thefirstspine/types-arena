import { IInteraction } from "./game-interaction.interface";

export interface IInteractionChoseCardOnBoard extends IInteraction {
  type: 'choseCardOnBoard';
  params: {
    boardCoords: string[],
  };
}
