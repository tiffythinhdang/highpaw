import { connect } from 'react-redux';
import { modifyRequest, deleteRequest } from '../../actions/request_actions';
import ModifyRequest from './modify_request';

const mapDispatchToProps = dispatch => {
  return {
    modify: request => dispatch(modifyRequest(request)),
    deleteRequest: requestId => dispatch(deleteRequest(requestId))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ModifyRequest);