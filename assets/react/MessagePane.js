'use strict';

import React from 'react';



export default class MessagePane extends React.Component {
  render () {
    if (!this.props.room) {
      return <div id="thread" />
    } else {
      return (
        <div id="thread">
          <h1>Room "{this.props.room.name}"</h1>
          <MessageList {...this.props}></MessageList>
          <MessageForm {...this.props} />
        </div>
      );
    }
  }
}



class MessageList extends React.Component {
  render () {
    if (!this.props.room.messages || !this.props.room.messages.length) {
      return <div />
    } else {
      var messageNodes = this.props.room.messages.map((message)=> {
        return ( <Message key={message.id} {...message} /> );
      });

      return (
        <div>
          <h2>MessageList</h2>
          <ul>
            {messageNodes}
          </ul>
        </div>
      );
    }
  }
}



class Message extends React.Component {
  render () {
    return (
      <li>
        <p>{this.props.content}</p>
      </li>
    )
  }
}



class MessageForm extends React.Component {
  _handleClick(e) {
    this.props.onAddMessage(this.refs.inputText.getDOMNode().value);
  }

  render () {
    return (
      <div>
        <input type="text" ref="inputText"></input>
        <button onClick={this._handleClick.bind(this)}>Send Message</button>
      </div>
    )
  }
}
