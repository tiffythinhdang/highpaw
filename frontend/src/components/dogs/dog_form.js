import React from 'react';

import '../../stylesheets/index.scss'
import '../../stylesheets/dog_form.scss'

class DogForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.form;
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="create-dog form-container">
        <h1 className="form main header">register your dog</h1>
        <form 
          className="create-dog form"
          onSubmit={this.handleSubmit}>
          <input
            className="form input"
            placeholder="Name"
            onChange={this.handleChange('name')}
          />
          <input
            className="form input"
            placeholder="Age"
            onChange={this.handleChange('age')}
          />
          <input
            className="form input"
            placeholder="Gender"
            onChange={this.handleChange('gender')}
          />
          <input
            className="form input"
            placeholder="Breed"
            onChange={this.handleChange('breed')}
          />
          <button 
            className="main large button">
            Register
          </button>
          <button 
            className="tertiary large button">
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default DogForm;