/*
 *
 * ChatContainer actions
 *
 */

import { SEND_MESSAGE_ACTION, RECEIVE_MESSAGE_ACTION } from './constants';

export const sendMessageAction = (message) => ({
  type: SEND_MESSAGE_ACTION,
  payload: message,
});

export const receiveMessageAction = (message) => ({
  type: RECEIVE_MESSAGE_ACTION,
  payload: message,
});
