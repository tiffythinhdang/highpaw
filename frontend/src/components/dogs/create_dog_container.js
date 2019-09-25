import { connect } from 'react-redux';

import DogForm from './dog_form';
import { createADog, fetchADog, clearDogErrors } from '../../actions/dogs_action';

const mapStateToProps = state => {
  return {
    form: {
      name: "",
      age: "",
      gender: "",
      breed: ""
    },
    formType: "Regiter",
    errors: state.errors.dog
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createADog: (data) => dispatch(createADog(data)),
    fetchADog: (id) => dispatch(fetchADog(id)),
    clearDogErrors: () => dispatch(clearDogErrors())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogForm);