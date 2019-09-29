import { connect } from 'react-redux';
import { modifyRequest, deleteRequest } from '../../actions/request_actions';
import ModifyRequest from './modify_request';
import { receiveListener, receiveRoom, receiveEmit, receiveLeaveRoom } from '../../actions/socket_actions'


const mapDispatchToProps = dispatch => {
  return {
    modify: request => dispatch(modifyRequest(request)),
    deleteRequest: requestId => dispatch(deleteRequest(requestId)),
    receiveRoom: room => dispatch(receiveRoom(room)),
    receiveLeaveRoom: room => dispatch(receiveLeaveRoom(room))
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyRequest);