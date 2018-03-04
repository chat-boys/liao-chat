import { createSelector } from 'reselect';
import { List } from 'immutable';

/**
 * Direct selector to the chatContainer state domain
 */
const selectChatContainerDomain = (state) => state.get('chatcontainer');

/**
 * Other specific selectors
 */
export const getMessages = createSelector(
  selectChatContainerDomain,
  (chatContainer) => chatContainer.get('messages', List()).toJS(),
);

/**
 * Default selector used by ChatContainer
 */
const selectChatContainer = createSelector(
  selectChatContainerDomain,
  (substate) => substate.toJS()
);

export default selectChatContainer;
export {
  selectChatContainerDomain,
};
