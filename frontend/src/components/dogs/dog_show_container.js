import { connect } from 'react-redux';

import DogShow from './dog_show';
import { fetchADog, updateADog, deleteADog } from '../../actions/dogs_action';

const mapStateToProps = (state, ownProps) => {
  let dogId = ownProps.match.params.id;

  let currentUserId;
  if (state.session.user) {
    currentUserId = state.session.user.id
  }
  return {
    dog: state.entities.dogs[dogId],
    currentUserId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchADog: (id) => dispatch(fetchADog(id)),
    updateADog: (data) => dispatch(updateADog(data)),
    deleteADog: (data) => dispatch(deleteADog(data))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogShow);