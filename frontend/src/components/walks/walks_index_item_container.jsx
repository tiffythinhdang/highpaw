import { connect } from 'react-redux';
import { fetchDogsFromWalk } from '../../actions/dogs_action';
import { fetchRequests } from '../../actions/request_actions';
import { fetchRequestersFromWalk } from '../../actions/requesters_action';
import WalksIndexItem from './walks_index_item';

const mapStateToProps = state => {
  return {
    requests: Object.values(state.entities.requests),
    currentUser: state.session.user,
    dogs: Object.values(state.entities.dogs),
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDogsFromWalk: id => dispatch(fetchDogsFromWalk(id)),
    fetchRequests: walkId => dispatch(fetchRequests(walkId)),
    fetchRequestersFromWalk: walkId => dispatch(fetchRequestersFromWalk(walkId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalksIndexItem)