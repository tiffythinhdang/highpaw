import { connect } from 'react-redux';
import Chat from './chat';
import {receiveListener, receiveRoom, receiveEmit, receiveLeaveRoom} from '../../actions/socket_actions'
import {fetchAllChats, fetchParticipants} from "../../actions/chat_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    socket: state.socket,
    chats: state.entities.chats,
    users: Object.values(state.entities.users)
  }
};

const mDTP = dispatch => ({
  receiveListener: listener => dispatch(receiveListener(listener)),
  receiveRoom: room => dispatch(receiveRoom(room)),
  receiveEmit: emit => dispatch(receiveEmit(emit)),
  receiveLeaveRoom: room => dispatch(receiveLeaveRoom(room)),
  fetchAllChats: requestId => dispatch(fetchAllChats(requestId)),
  fetchParticipants: requestId => dispatch(fetchParticipants(requestId))
});

export default connect(
  mapStateToProps,
  mDTP
)(Chat);