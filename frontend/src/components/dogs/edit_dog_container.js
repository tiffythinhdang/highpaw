import React from 'react';
import { connect } from 'react-redux';

import DogForm from './dog_form';
import { updateADog, fetchADog, clearDogErrors } from '../../actions/dogs_action';

class EditDog extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchADog(this.props.match.params.id)
  }

  render() {
    if (!this.props.form) return null;
    return(
      <div className="edit-dog outer-container">
        <DogForm 
          header={this.props.header}
          form={this.props.form} 
          formType={this.props.formType}
          errors={this.props.errors}
          currentUserId={this.props.currentUserId}
          action={this.props.action}
          clearDogErrors={this.props.clearDogErrors}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let dogId = ownProps.match.params.id;
  return {
    form: state.entities.dogs[dogId],
    formType: "Update",
    header:"update your dog",
    errors: state.errors.dog,
    currentUserId: state.session.user.id,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    action: (data) => dispatch(updateADog(data)),
    fetchADog: (id) => dispatch(fetchADog(id)),
    clearDogErrors: () => dispatch(clearDogErrors())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDog);