import { IGameInteraction } from "./game-interaction.interface";

export interface IInteractionChoseCardOnBoard extends IGameInteraction {
  type: 'choseCardOnBoard';
  params: {
    boardCoords: string[],
  };
}
