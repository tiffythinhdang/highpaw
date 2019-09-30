import { RECEIVE_LISTENER, RECEIVE_ROOM, RECEIVE_EMIT, RECEIVE_LEAVE_ROOM } from '../actions/socket_actions'

const io = require('socket.io-client');
// let socket = process.env.PORT ? io() : io('ws://localhost:5000', { transports: ['websocket'] });

let socket = io()
// intialState = {
  //   listeners: [],
  //   rooms: []
  // }
  let socket = io();
  socket.on('success', (res) => console.log(res))

export const socketReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_ROOM:
      socket.emit('joinRoom', action.room);
      return newState;
    case RECEIVE_LISTENER:
      socket.on(action.listener.action, action.listener.callback);
      return newState;
    case RECEIVE_EMIT:
      socket.emit(action.emit.action, action.emit.value)
      return newState;
    case RECEIVE_LEAVE_ROOM: 
      socket.emit('leaveRoom', action.room);
      return newState;
    default:
      return state
  }
}