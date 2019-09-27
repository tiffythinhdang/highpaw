import { connect } from 'react-redux';

import DogForm from './dog_form';
import { createADog, fetchADog, clearDogErrors } from '../../actions/dogs_action';

const mapStateToProps = state => {
  return {
    form: {
      name: "",
      age: "",
      gender: "",
      breed: "",
      profilePhotoUrl: ""
    },
    formType: "Register",
    header: "register your dog",
    errors: state.errors.dog,
    currentUserId: state.session.user.id,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    action: (data) => dispatch(createADog(data)),
    fetchADog: (id) => dispatch(fetchADog(id)),
    clearDogErrors: () => dispatch(clearDogErrors())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogForm);