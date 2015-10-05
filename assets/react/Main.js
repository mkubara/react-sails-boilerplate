'use strict';

import React from 'react';
import _ from 'lodash';

import RoomPane from './RoomPane';
import MessagePane from './MessagePane';


export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      rooms: [{
        id: 1,
        name: 'room1',
        messages: [ {id: 1, content: 'asdf'} ]
      }, {
        id: 2,
        name: 'asdf',
        messages: [ {id: 2, content: 'qwer'} ]
      }],
      currentRoom: null
    };
    this.state.currentRoom = this.state.rooms[0];
  }

  // 新しいRoomを作成し追加する
  _addRoom(roomName) {
    console.log(`addRoom: ${roomName}`);

    const newRooms = [].concat(this.state.rooms);
    newRooms.push({
      id: newRooms.length + 1,
      name: roomName,
      messages: []
    });

    this.setState({
      rooms: newRooms
    });
  }

  _changeRoom(roomId) {
    console.log(`changeRoom: ${roomId}`);

    const newState = _.cloneDeep(this.state);
    newState.currentRoom = _.find(newState.rooms, (room) => {
      return room.id === roomId;
    });

    this.setState(newState);
  }

  _addMessage(message) {
    console.log(`addMessage: ${message}`);

    const newState = _.cloneDeep(this.state);
    newState.currentRoom = _.find(newState.rooms, (room) => {
      return room.id === this.state.currentRoom.id;
    });
    newState.currentRoom.messages.push({
      id: newState.currentRoom.messages.length + 1,
      content: message
    });

    this.setState(newState);
  }

  render() {
    return (
      <div id="page">
        <RoomPane rooms={this.state.rooms} onRoomChange={this._changeRoom.bind(this)} onAddRoom={this._addRoom.bind(this)} />
        <MessagePane room={this.state.currentRoom} onAddMessage={this._addMessage.bind(this)} />
      </div>
    );
  }
}
