import React from 'react';
const io = require('socket.io-client');

export default class SocketManager extends React.Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    this.socket = io();
    this.props.socket.rooms.forEach(room => {
      socket.emit('joinRoom', room)
    })
    this.props.socket.listeners.forEach(listener => {
      socket.on(listener.type, )
    });
    return (
      <div></div>
    );
  }
}