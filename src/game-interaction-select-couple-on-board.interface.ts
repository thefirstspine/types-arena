import { IInteractionMoveCardOnBoardPossibility } from "./game-interaction-move-card-on-board-possibility.interface";
import { IGameInteraction } from "./game-interaction.interface";

export interface IInteractionSelectCoupleOnBoard extends IGameInteraction {
  type: 'selectCoupleOnBoard';
  params: {
    possibilities: IInteractionMoveCardOnBoardPossibility[],
  };
}
