import { connect } from 'react-redux'
import Map from './map';
import { receiveEmit, receiveListener, receiveLeaveRoom, receiveRoom } from '../../actions/socket_actions';


const mapStateToProps = state => {
  
  let currentUser;
  if (state.session.user) {
    currentUser = state.session.user
  }

  return {
    socket: state.socket,
    currentUser,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveEmit: emit => dispatch(receiveEmit(emit)),
    receiveListener: listener =>  dispatch(receiveListener(listener)),
    receiveLeaveRoom: room => dispatch(receiveLeaveRoom(room)),
    receiveRoom: room => dispatch(receiveRoom(room))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)