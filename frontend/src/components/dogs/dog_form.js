import React from 'react';
import { withRouter } from 'react-router-dom';

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
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleGoBack(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  uploadFile(file, signedRequest, url) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.setState({ profilePhotoUrl: url})
        }
        else {
          alert('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  }

  getSignedRequest(file) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          this.uploadFile(file, response.signedRequest, response.url);
        }
        else {
          alert('Could not get signed URL.');
        }
      }
    };
    xhr.send();
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    if (file) {
      this.getSignedRequest(file);
    }
  }

  handleChange(type) {
    return (e) => {
      if (e.target.tagName === "SELECT") {changeSelectorColor(e.target)}
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(payload => {
        if (payload.dog) this.props.history.push(`/dogs/${payload.dog.data._id}`)
      })
  }

  componentWillUnmount() {
    this.props.clearDogErrors();
  }

  render() {
    return (
      <div className="create-dog form-container">
        <h1 className="form main header">{this.props.header}</h1>
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
            <div className="errors">{this.props.errors.profilePhotoUrl}</div>
          </div>

          <input
            className="form input"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleChange('name')}
          />
          <div className="errors">{this.props.errors.name}</div>

          <input
            className="form input"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange('age')}
          />
          <div className="errors">{this.props.errors.age}</div>

          <select
            className="form input"
            value={this.state.gender}
            onChange={this.handleChange('gender')}>
            <option className="disabled" value="" disabled defaultValue>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <div className="errors">{this.props.errors.gender}</div>

          <input
            className="form input"
            value={this.state.breed}
            placeholder="Breed"
            onChange={this.handleChange('breed')}
          />
          <div className="errors">{this.props.errors.breed}</div>

          <button 
            className="main large button">
            {this.props.formType}
          </button>
          <button 
            className="tertiary large button"
            onClick={this.handleGoBack}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(DogForm);