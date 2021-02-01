import { IQueueUser } from "./queue-user.interface";

/**
 * A queue instance is a queue created in Arena the users can join.
 */
export interface IQueueInstance {

  /**
   * The key of the instance. Should be unique.
   */
  key: string;

  /**
   * The game type ID of the instance.
   */
  gameTypeId: string;

  /**
   * The user joined.
   */
  users: IQueueUser[];

  /**
   * The theme (scenery) of the game. Unset means that a
   * theme will be picked randomly.
   */
  theme?: string;

  /**
   * The modifiers than can modify the game instance. Uset
   * or empty means no modifier.
   */
  modifiers?: string[];

  /**
   * The speed of the instances created from the queue.
   * Lower value means quicker expiration times.
   */
  expirationTimeModifier?: number;

  /**
   * Creation date.
   */
  createdAt: number;

  /**
   * Expiration date. No expiration on unset field.
   */
  expiresAt?: number;
}