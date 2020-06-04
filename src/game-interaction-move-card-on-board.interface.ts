import { IGameInteraction } from "./game-interaction.interface";
import { IInteractionMoveCardOnBoardPossibility } from "./game-interaction-move-card-on-board-possibility.interface";

export interface IInteractionMoveCardOnBoard extends IGameInteraction {
  type: 'moveCardOnBoard';
  params: {
    possibilities: IInteractionMoveCardOnBoardPossibility[],
  };
}
