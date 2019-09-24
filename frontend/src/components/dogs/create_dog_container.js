import { connect } from 'react-redux';

import DogForm from './dog_form';

const mapStateToProps = state => {
  return {
    form: {
      name: "",
      age: "",
      gender: "",
      breed: ""
    },
    loggedIn: state.session.isAuthenticated
  }
};

const mapDispatchToProps = dispatch => {
  return {
    
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogForm);