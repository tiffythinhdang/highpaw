import { connect } from 'react-redux';
import { modifyRequest } from '../../actions/request_actions';
import FulfillRequest from './fulfill_request';

const mapDispatchToProps = dispatch => {
  return {
    fulfill: request => dispatch(modifyRequest(request))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(FulfillRequest)