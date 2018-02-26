/**
 *
 * ChatContainer
 *
 */

import React from 'react';
import { string, func, arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { getMessages } from './selectors';
import { sendMessageAction } from './actions';
import reducer from './reducer';
import saga from './saga';

const renderMessages = (messages) => messages.map((message) => <div>{message}</div>);

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: '',
    };

    this.sendMessage = this.sendMessage.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  sendMessage() {
    this.props.sendMessage(this.state.currentMessage);
  }

  inputChange({ target: { value } }) {
    this.setState({ currentMessage: value });
  }

  render() {
    const { messages } = this.props;

    return (
      <div>
        <Helmet>
          <title>ChatContainer</title>
          <meta name="description" content="Description of ChatContainer" />
        </Helmet>
        <input id="text" onChange={this.inputChange} />
        <button id="send-button" onClick={this.sendMessage}>Send message</button>
        <div id="receiving-area">{renderMessages(messages)}</div>
      </div>
    );
  }
}

ChatContainer.propTypes = {
  sendMessage: func.isRequired,
  messages: arrayOf(string).isRequired,
};

const mapStateToProps = createStructuredSelector({
  messages: getMessages,
});

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: (message) => dispatch(sendMessageAction(message)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'chatcontainer', reducer });
const withSaga = injectSaga({ key: 'chatcontainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ChatContainer);
