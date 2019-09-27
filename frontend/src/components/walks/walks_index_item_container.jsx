import { connect } from 'react-redux';
import { createWalk, fetchWalks } from '../../actions/walk_actions';
import { fetchDogsFromWalk } from '../../actions/dogs_action';
import { fetchRequests } from '../../actions/request_actions';
import WalksIndexItem from './walks_index_item';

const mapStateToProps = state => {
  // debugger
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
    // fetchDog: id => dispatch(fetchDog(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalksIndexItem)