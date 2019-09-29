import { connect } from 'react-redux';

import UserShow from './user_show';
import { fetchDogsFromUser } from '../../actions/dogs_action';
import { fetchAUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.id;

  let currentUserId;
  if (state.session.user) {
    currentUserId = state.session.user.id
  }

  return {
    user: state.entities.users[userId],
    currentUserId,
    dogs: state.entities.dogs,
    loading: state.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    fetchDogsFromUser: (id) => dispatch(fetchDogsFromUser(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);