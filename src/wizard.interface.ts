import { IWizardItem } from "./wizard-item.interface";
import { IWizardHistoryItem } from "./wizard-history-item.interface";
import { IUserQuest } from "./user-quest.interface";

/**
 * The wizard account of a player.
 */
export interface IWizard {

  /**
   * The ID of a player, corresponding to his ID in the auth net service.
   */
  id: number;

  /**
   * The version of the wizard file.
   */
  version: 1.0;

  /**
   * Chosen name of the wizard. Can be changed at any time.
   */
  name: string;
  
  /**
   * All the items obtained by the player.
   */
  items: IWizardItem[];

  /**
   * The gams history of the player.
   */
  history: IWizardHistoryItem[];

  /**
   * All the purchases made by the player.
   */
  purchases: string[];

  /**
   * The chosen avatar of the player.
   */
  avatar: string;

  /**
   * The chosen title of the player.
   */
  title: string;

  /**
   * The unlocked triumphs.
   */
  triumphs: string[];

  /**
   * All the friends the player added.
   */
  friends: number[];

  /**
   * An history of the quests taken by the player.
   */
  quests: string[];

  /**
   * The current quests taken by the player.
   */
  questsProgress: IUserQuest[];
}
