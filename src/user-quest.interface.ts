import { IQuest } from "@thefirstspine/types-rest";

export interface IUserQuest extends IQuest {
  objectiveCurrent: number;
}
