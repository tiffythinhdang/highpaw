import { sendRequest, deleteRequest } from '../../actions/request_actions';
import { connect } from 'react-redux';
import SendRequest from './send_request';
import {receiveListener, receiveRoom, receiveEmit, receiveLeaveRoom} from '../../actions/socket_actions'


const mapStateToProps = state => {
  return {
    requester: state.session.user.id,
    socket: state.socket
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    paw: walkId => dispatch(sendRequest(walkId)),
    deleteRequest: requestId => dispatch(deleteRequest(requestId)),
    receiveListener: listener => dispatch(receiveListener(listener)),
    receiveRoom: room => dispatch(receiveRoom(room)),
    receiveEmit: emit => dispatch(receiveEmit(emit)),
    receiveLeaveRoom: room => dispatch(receiveLeaveRoom(room))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendRequest);