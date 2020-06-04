import { IWizardItem } from "./wizard-item.interface";

export interface IGameResult {
  user: number;
  result: 'win'|'lose'|'kick'|'concede';
  loot: IWizardItem[];
}
