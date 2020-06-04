import { IGameInteraction } from "./game-interaction.interface";

export interface IInteractionPutCardOnBoard extends IGameInteraction {
  type: 'putCardOnBoard';
  params: {
    handIndexes: number[],
    boardCoords: string[],
  };
}
