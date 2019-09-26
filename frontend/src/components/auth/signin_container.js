import { connect } from 'react-redux';
import { login, clearSessionErrors } from "../../actions/session_actions";
import SignIn from "./signin";
import { withRouter } from 'react-router-dom'

const mSTP = state => ({
  errors: state.errors.session
});

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(mSTP, mDTP)(SignIn))