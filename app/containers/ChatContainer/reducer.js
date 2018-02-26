/*
 *
 * ChatContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEND_MESSAGE_ACTION,
} from './constants';

const initialState = fromJS({});

function chatContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE_ACTION:
      return state;
    default:
      return state;
  }
}

export default chatContainerReducer;
