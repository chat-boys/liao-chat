import { all, call, takeEvery, take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import ws from 'services/websocket';
import { SEND_MESSAGE_ACTION } from './constants';
import { receiveMessageAction } from './actions';


const sendMessage = ({ payload }) => {
  ws.send(payload);
};

const watchMessages = eventChannel((emit) => {
  ws.onmessage = (evt) => emit(evt);
  return () => console.log('unsubscribe from ws');
});

export default function* chatContainerSaga() {
  yield all([
    takeEvery(SEND_MESSAGE_ACTION, sendMessage),
    call(function* () {
      const messageChannel = watchMessages;

      while (true) {
        const { data } = yield take(messageChannel);
        yield put(receiveMessageAction(data));
      }
    }),
  ]);
}
