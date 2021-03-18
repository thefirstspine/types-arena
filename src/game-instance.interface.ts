import { IGameUser } from "./game-user.interface";
import { IGameCard } from "./game-card.interface";
import { IGameAction } from "./game-action.interface";
import { IGameActionPassed } from "./game-action-passed.interface";
import { IGameInteraction } from "./game-interaction.interface";
import { IGameResult } from "./game-result.interface";

export interface IGameInstance {
  id: number;
  status: 'active'|'ended'|'closed'|'conceded';
  theme: string;
  modifiers: string[];
  expirationTimeModifier?: number;
  users: IGameUser[];
  gameTypeId: string;
  cards: IGameCard[];
  actions: {
    current: IGameAction<IGameInteraction>[],
    previous: IGameActionPassed<IGameInteraction>[],
  };
  result?: IGameResult[];
  realm?: string;
}
