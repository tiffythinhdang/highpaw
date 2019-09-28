import { connect } from 'react-redux';
import { fetchDogsFromWalk } from '../../actions/dogs_action';
import { fetchRequests } from '../../actions/request_actions';
import WalksIndexItem from './walks_index_item';

const mapStateToProps = state => {
  return {
    requests: Object.values(state.entities.requests),
    currentUser: state.session.user,
    dogs: Object.values(state.entities.dogs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDogsFromWalk: id => dispatch(fetchDogsFromWalk(id)),
    fetchRequests: walkId => dispatch(fetchRequests(walkId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalksIndexItem)