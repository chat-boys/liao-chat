/*
 *
 * ChatContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEND_MESSAGE_ACTION,
  RECEIVE_MESSAGE_ACTION,
} from './constants';

const initialState = fromJS({
  messages: [],
});

function chatContainerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SEND_MESSAGE_ACTION:
      return state;
    case RECEIVE_MESSAGE_ACTION: {
      return state.update('messages', (messages) => messages.push(payload));
    }
    default:
      return state;
  }
}

export default chatContainerReducer;
