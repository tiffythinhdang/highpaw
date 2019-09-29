import { connect } from 'react-redux';
import Chat from './chat';
import {receiveListener, receiveRoom, receiveEmit, receiveLeaveRoom} from '../../actions/socket_actions'

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    socket: state.socket,
  }
}

const mDTP = dispatch => ({
  receiveListener: listener => dispatch(receiveListener(listener)),
  receiveRoom: room => dispatch(receiveRoom(room)),
  receiveEmit: emit => dispatch(receiveEmit(emit)),
  receiveLeaveRoom: room => dispatch(receiveLeaveRoom(room))
})

export default connect(
  mapStateToProps,
  mDTP
)(Chat);