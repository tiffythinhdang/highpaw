import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import Menu from './menu';

const mapStateToProps = state => {

  let currentUserId;

  if (state.session.user) {
    currentUserId = state.session.user.id
  }

  return {
    loggedIn: state.session.isAuthenticated,
    currentUserId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);