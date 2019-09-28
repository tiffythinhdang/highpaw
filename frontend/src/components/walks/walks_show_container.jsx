import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteWalk } from '../../actions/walk_actions';
import { fetchDogsFromWalk } from '../../actions/dogs_action';
import { fetchRequests } from '../../actions/request_actions';
import WalksShow from './walks_show';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    currentUser: state.session.user,
    walks: Object.values(state.entities.walks),
    requests: Object.values(state.entities.requests)
    // walks: state.entities.walks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteWalk: walkId => dispatch(deleteWalk(walkId)),
    fetchDogsFromWalk: id => dispatch(fetchDogsFromWalk(id)),
    fetchRequests: walkId =>  dispatch(fetchRequests(walkId)),
    // fetchDog: id => dispatch(fetchDog(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalksShow)