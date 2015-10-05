'use strict';

import React from 'react';


export default class RoomPane extends React.Component {
  render () {
    return (
      <div id="sidebar">
        <h2>Rooms ({this.props.rooms.length})</h2>
        <RoomList {...this.props} />
        <RoomForm {...this.props} />
      </div>
    )
  }
}


class RoomList extends React.Component {
  render () {
    const roomNodes = this.props.rooms.map((room) => {
      return ( <Room key={room.id} {...room} /> );
    });

    return (
      <ul id="roomList">
        {roomNodes}
      </ul>
    )
  }
}


class Room extends React.Component {
  render () {
    return (
      <li>
        <p>{this.props.name}</p>
      </li>
    )
  }
}


class RoomForm extends React.Component {
  constructor() {
    super();
  }

  // クリックイベントを拾って、親のイベントハンドラを呼び出す
  _handleClick(e) {
    // propsで受け取ったハンドラを呼び出す。
    // 入力したテキストは、DOMNodeから拾い上げる
    this.props.onAddRoom(React.findDOMNode(this.refs.inputText).value);
  }

  // 例によって .bind(this) を忘れないこと！
  render () {
    return (
      <div>
        <h3>Create Room</h3>
        <input type="text" ref="inputText"></input>
        <button onClick={this._handleClick.bind(this)}>Create Room</button>
      </div>
    )
  }
}
