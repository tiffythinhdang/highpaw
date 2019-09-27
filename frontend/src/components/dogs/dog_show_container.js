import { connect } from 'react-redux';

import DogShow from './dog_show';
import { fetchADog, updateADog } from '../../actions/dogs_action';

const mapStateToProps = (state, ownProps) => {
  let dogId = ownProps.match.params.id;
  return {
    dog: state.entities.dogs[dogId],
    currentUserId: state.session.user.id
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchADog: (id) => dispatch(fetchADog(id)),
    updateADog: (data) => dispatch(updateADog(data))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogShow);