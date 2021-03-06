import { connect } from 'react-redux';
import { deleteWalk } from '../../actions/walk_actions';
import { fetchRequests } from '../../actions/request_actions';
import WalksShow from './walks_show';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    // walks: Object.values(state.entities.walks),
    requests: Object.values(state.entities.requests)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteWalk: walkId => dispatch(deleteWalk(walkId)),
    fetchRequests: walkId =>  dispatch(fetchRequests(walkId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalksShow)