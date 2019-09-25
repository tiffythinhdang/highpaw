import { connect } from 'react-redux';
import { login, clearSessionErrors } from "../../actions/session_actions";
import SignIn from "./signin";

const mSTP = state => ({
  errors: state.errors.session
});

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(SignIn)