import { IWizard } from "./wizard.interface";
import { IGameUser } from "./game-user.interface";

export interface IApiGetUsersResponse {
  users: Array<{
    account: IWizard,
    game: IGameUser,
  }>;
}
