import { IGameInteraction } from "./game-interaction.interface";

export interface IInteractionPass extends IGameInteraction {
  type: 'pass';
  params: {
  };
}
