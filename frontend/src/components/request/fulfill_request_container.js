import { connect } from 'react-redux';
import { modifyRequest, deleteRequest } from '../../actions/request_actions';
import FulfillRequest from './fulfill_request';

const mapDispatchToProps = dispatch => {
  return {
    fulfill: request => dispatch(modifyRequest(request)),
    deleteRequest: requestId => dispatch(deleteRequest(requestId))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(FulfillRequest)