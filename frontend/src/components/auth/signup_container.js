import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SignUp from "./signup";

const mSTP = state => ({
  errors: state.errors.session
});

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(mSTP, mDTP)(SignUp))