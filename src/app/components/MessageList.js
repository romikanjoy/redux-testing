import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMessages } from '../actions';
import MessageListItem from './MessageListItem';

export class MessageList extends React.Component {

  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    const { messages } = this.props;
    const margin = { marginTop: 20, marginBottom: 20 };

    if (!messages) {
      return <div className="lead" style={margin}>Loading Messages...</div>
    }

    const nonZero = <p>You have {messages.length} messages.</p>;
    const zero = <p>You do not have any messages.</p>;

    return (
      <div style={margin}>
        <div className="lead">{messages.length > 0 ? nonZero : zero}</div>

        <ul className="list-group">
          {messages.map((message) => <MessageListItem key={message.id} message={message} /> )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMessages: bindActionCreators(loadMessages, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
