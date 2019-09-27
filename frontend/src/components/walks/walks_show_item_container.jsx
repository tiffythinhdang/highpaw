import { connect } from 'react-redux';
import { deleteWalk } from '../../actions/walk_actions';
import { fetchDogsFromWalk } from '../../actions/dogs_action';
import { fetchRequests } from '../../actions/request_actions';
import { fetchUserFromRequest } from '../../actions/user_actions';
import WalksShowItem from './walks_show_item';

const mapStateToProps = state => {
  // debugger;
  return {
    currentUser: state.session.user,
    user: Object.values(state.entities.users)
    // walks: state.entities.walks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserFromRequest: requestId => dispatch(fetchUserFromRequest(requestId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalksShowItem)