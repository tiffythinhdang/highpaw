import { connect } from 'react-redux';

import UserShow from './user_show';
import { fetchDogsFromUser } from '../../actions/dogs_action';

const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.id;
  return {
    user: state.entities.users[userId]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDogsFromUser: (id) => dispatch(fetchDogsFromUser(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);