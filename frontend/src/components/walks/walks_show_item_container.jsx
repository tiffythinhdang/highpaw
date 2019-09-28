import { connect } from 'react-redux';
import { fetchUserFromRequest } from '../../actions/user_actions';
import WalksShowItem from './walks_show_item';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.user,
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserFromRequest: requestId => dispatch(fetchUserFromRequest(requestId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalksShowItem)