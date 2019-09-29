export const RECEIVE_LISTENER = "RECEIVE_LISTENER";
export const RECEIVE_ROOM = "RECEIVE_ROOM";
export const RECEIVE_EMIT = "RECEIVE_EMIT";
export const RECEIVE_LEAVE_ROOM = "RECEIVE_LEAVE_ROOM"

export const receiveListener = listener => ({
  type: RECEIVE_LISTENER,
  listener
})

export const receiveEmit = emit => ({
  type: RECEIVE_EMIT,
  emit
}) 

export const receiveRoom = room => {
  return {
    type: RECEIVE_ROOM,
    room
  }
}

export const receiveLeaveRoom = room => ({
  type: RECEIVE_LEAVE_ROOM,
  room
})