import { connect } from 'react-redux'
import Map from './map';
import { receiveEmit, receiveListener, receiveLeaveRoom } from '../../actions/socket_actions';


const mapStateToProps = state => {
  
  let currentUser;
  let userName;
  if (state.session.user) {
    currentUser = state.session.user.id;
    userName = state.session.user.name
  }

  return {
    socket: state.socket,
    currentUser,
    userName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveEmit: emit => dispatch(receiveEmit(emit)),
    receiveListener: listener =>  dispatch(receiveListener(listener)),
    receiveLeaveRoom: room => dispatch(receiveLeaveRoom(room))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)