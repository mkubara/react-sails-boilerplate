'use strict';

import React from 'react';
import RoomPane from './RoomPane';

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      rooms: [{
        id: 1,
        name: 'room1',
        messages: [ {id: 1, message: 'asdf'} ]
      }, {
        id: 2,
        name: 'asdf',
        messages: [ {id: 2, message: 'qwer'} ]
      }],
      currentRoom: null
    };
    this.state.currentRoom = this.state.rooms[0];
  }

  // 新しいRoomを作成し追加する
  _addRoom(roomName) {
    console.log(`addRoom: ${roomName}`);

    // stateを複製し、新しいRoom要素を追加
    const newRooms = [].concat(this.state.rooms);
    newRooms.push({
      id: newRooms.length + 1,
      name: roomName,
      comments: []
    });

    // 複製した要素で、現在のStateを差し替える。
    // 変更したStateは、すべての子要素に自動的に通知される
    this.setState({
      rooms: newRooms
    });
  }

  render() {
    return (
      <div id="page">
        {/* イベントハンドラを子へ渡す、必ず .bind(this) すること！ */}
        <RoomPane {...this.state}  onAddRoom={this._addRoom.bind(this)} />
      </div>
    );
  }
}
