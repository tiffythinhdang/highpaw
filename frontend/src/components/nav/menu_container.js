import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import Menu from './menu';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated
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