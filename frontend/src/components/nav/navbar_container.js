import { connect } from 'react-redux';

import NavBar from './navbar';

const mapStateToProps = state => {

  let currentUserId;

  if (state.session.user) {
    currentUserId = state.session.user.id
  }

  return {
    currentUserId
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);