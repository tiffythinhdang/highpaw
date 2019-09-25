import { connect } from 'react-redux';
import { modifyRequest } from '../../actions/request_actions';
import ModifyRequest from './modify_request';

const mapDispatchToProps = dispatch => {
  return {
    modify: request => dispatch(modifyRequest(request))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ModifyRequest);