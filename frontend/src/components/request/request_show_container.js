import {connect} from 'react-redux';
import RequestShow from './request_show';
import { receiveRoom, receiveLeaveRoom } from '../../actions/socket_actions';
import { deleteRequest } from '../../actions/request_actions';

const mapDispatchToProps = (dispatch) => {

  return {
    receiveRoom: room => dispatch(receiveRoom(room)),
    receiveLeaveRoom: room => dispatch(receiveLeaveRoom(room)),
    deleteRequest: id => dispatch(deleteRequest(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(RequestShow)