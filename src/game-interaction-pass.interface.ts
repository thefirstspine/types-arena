import { IInteraction } from "./game-interaction.interface";

export interface IInteractionPass extends IInteraction {
  type: 'pass';
  params: {
  };
}
