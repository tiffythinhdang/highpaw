import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SignUp from "./signup";

const mSTP = state => ({
  form: {
    name: '',
    email: '',
    password: '',
    password2: '',
    age: '',
    gender: '',
    active: {
      name: false,
      email: false,
      password: false,
      password2: false,
      age: false,
      gender: false,
    }
  },
  header: "Sign Up!",
  formType: "Sign Up",
  errors: state.errors.session,
  currentUser: state.session.user,
});

const mDTP = dispatch => ({
  action: user => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(mSTP, mDTP)(SignUp))