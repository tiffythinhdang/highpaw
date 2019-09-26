import React from 'react';

import '../../stylesheets/index.scss';
import '../../stylesheets/dog_form.scss';
import iconDog from '../../assets/medium_icon_dog.png';
import { changeSelectorColor } from '../../util/css_util';

class DogForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.form;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleChange(type) {
    return (e) => {
      if (e.target.tagName === "SELECT") {changeSelectorColor(e.target)}
      this.setState({ [type]: e.target.value })
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, profilePhotoUrl: fileReader.result });
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createADog(this.state)
      .then(payload => {
        if (payload.dog) this.props.history.push(`/dogs/${payload.dog.data._id}`)
      })

  }

  componentWillUnmount() {
    this.props.clearDogErrors();
  }

  renderErrors() {
    return (
      <ul className="errors">
        {
          Object.values(this.props.errors).map((err, i) => (
            <li key={`error-${i}`}>
              {err}
            </li>
          ))
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="create-dog form-container">
        <h1 className="form main header">register your dog</h1>
        {this.renderErrors()}
        <form 
          className="create-dog form"
          onSubmit={this.handleSubmit}>
          <div className="photo-upload input">
            <div className="profile-photo container">
              {this.state.profilePhotoUrl ? <img src={this.state.profilePhotoUrl}/> : <img className="medium light icon dog" src={iconDog}/>}
            </div>
             
            <label className="small secondary button">
              Upload
              <input
                type="file"
                onChange={this.handleFile}
              />
            </label>
          </div>

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

          <select
            className="form input"
            value={this.state.gender}
            onChange={this.handleChange('gender')}>
            <option className="disabled" value="" disabled defaultValue>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            className="form input"
            placeholder="Breed"
            onChange={this.handleChange('breed')}
          />

          <button 
            className="main large button">
            {this.props.formType}
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