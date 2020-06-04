import { IInteraction } from "./game-interaction.interface";
import { IInteractionMoveCardOnBoardPossibility } from "./game-interaction-move-card-on-board-possibility.interface";

export interface IInteractionMoveCardOnBoard extends IInteraction {
  type: 'moveCardOnBoard';
  params: {
    possibilities: IInteractionMoveCardOnBoardPossibility[],
  };
}
