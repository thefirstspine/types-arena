import { IWizardItem } from "./wizard-item.interface";
import { IWizardHistoryItem } from "./wizard-history-item.interface";

export interface IWizard {
  id: number;
  version: 0.6;
  name: string;
  items: IWizardItem[];
  history: IWizardHistoryItem[];
  purchases: string[];
  avatar: string;
  title: string;
  triumphs: string[];
}
