import {connect} from 'react-redux';
import { fetchUserRequests } from '../../actions/request_actions'
import RequestIndex from './request_index';

const mapStateToProps = (state) => {
  let requests = Object.values(state.entities.requests)
  // debugger
  if (requests.length > 1) {
    requests = requests.filter(request => request.requester === state.session.user.id)
  }
  return {
    requests
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRequests: () => dispatch(fetchUserRequests())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestIndex)