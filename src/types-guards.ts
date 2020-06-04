import { IApiJoinQueueParams } from "./api-join-queue-paramas.interface";
import { IApiQuitQueueParams } from "./api-quit-queue-params.interface";
import { IApiRefreshQueueAskParams } from "./api-refresh-queue-ask-params.interface";
import { IApiRespondToActionParams } from "./api-respond-to-action-params.interface";

export function isJoinQueueParams(toBeDetermined: any): toBeDetermined is IApiJoinQueueParams {
  return toBeDetermined.gameType && toBeDetermined.destiny;
}

export function isQuitQueueParams(toBeDetermined: any): toBeDetermined is IApiQuitQueueParams {
  return toBeDetermined.gameType;
}

export function isRefreshAskQueueParams(toBeDetermined: any): toBeDetermined is IApiRefreshQueueAskParams {
  return toBeDetermined.gameType;
}

export function isRespondToActionParams(toBeDetermined: any): toBeDetermined is IApiRespondToActionParams {
  return toBeDetermined.response && toBeDetermined.actionType;
}
