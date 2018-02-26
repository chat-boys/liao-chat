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

function chatContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE_ACTION:
      return state;
    case RECEIVE_MESSAGE_ACTION:
      return {
        messages: state.messages.push(action.message),
        ...state,
      };
    default:
      return state;
  }
}

export default chatContainerReducer;
