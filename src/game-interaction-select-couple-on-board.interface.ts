import { IInteractionMoveCardOnBoardPossibility } from "./game-interaction-move-card-on-board-possibility.interface";
import { IInteraction } from "./game-interaction.interface";

export interface IInteractionSelectCoupleOnBoard extends IInteraction {
  type: 'selectCoupleOnBoard';
  params: {
    possibilities: IInteractionMoveCardOnBoardPossibility[],
  };
}
