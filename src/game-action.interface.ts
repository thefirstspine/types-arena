import { ILocalized } from '@thefirstspine/types-rest';
import { IInteraction } from './game-interaction.interface';

export interface IGameAction<T extends IInteraction> {
  type: string;
  name: ILocalized;
  description: ILocalized;
  createdAt: number;
  expiresAt?: number;
  user: number;
  priority: number;
  interaction: T,
  response?: {
    [key: string]: any;
  }
}
