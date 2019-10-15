import { RECEIVE_ALL_CHATS } from "../actions/chat_actions";

const chatReducer = (state = [], action) => {
  let newState = state.slice();

  switch (action.type) {
    case RECEIVE_ALL_CHATS:
      newState = action.chats;
      return newState;
    default:
      return state;
  }
};

export default chatReducer;