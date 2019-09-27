import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/index.scss';
import '../../stylesheets/dog_show.scss';
import displayAge from '../../util/display_age_util';

class DogShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.dog;

    // this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleAddPhoto = this.handleAddPhoto.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchADog(this.props.match.params.id)
  }

  displayEditButton() {
    if (this.props.dog.owner._id === this.props.currentUserId) {
      return (
        <Link to={`/dogs/${this.props.dog._id}/edit`}>
          <button
            className="tertiary small button dog-show edit">
            Edit
          </button>
        </Link>
      )
    }
  }

  displayDeleteButton() {
    if (this.props.dog.owner._id === this.props.currentUserId) {
      return (
        <button 
          className="large main button"
          onClick={this.handleDelete}
          >Delete</button>
      )
    }
  }

  displayAddPhoto(){
    if (this.props.dog.owner._id === this.props.currentUserId) {
      return (
        <label 
          className="dog-show update-photos">
          Add Photo
          <input
            type="file"
            onChange={this.handleFile}
          />
        </label>
      )
    }
  }

  handleDelete(){
    this.props.deleteADog(this.props.dog._id)
      .then(this.handleGoBack())
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    if (file) {
      this.getSignedRequest(file);
    }
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

  uploadFile(file, signedRequest, url) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let newPhotoURLs = this.props.dog.photoURLs.concat(url);
          this.setState({ photoURLs: newPhotoURLs });
          this.handleAddPhoto();
        }
        else {
          alert('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  }

  handleAddPhoto() {
    let newDog = this.props.dog;
    newDog["photoURLs"] = this.state.photoURLs;
    this.props.updateADog(newDog)
      .then(payload => {
        if (payload.dog) this.props.fetchADog(payload.dog.data._id)
      })
  }
  
  // Need to relook at this once connected with walk and request

  // handleSubmitRequest(e) {
  //   e.preventDefault();
    
  // }

  handleGoBack() {
    this.props.history.goBack();
  }

  render() {
    if (!this.props.dog) return null;
    return (
      <div className="dog-show container">
        <h1 className="form main header">about me</h1>
        <div className="dog-show main-infor container">
          <div className="dog-show header-container">

            <div className="dog-show header infor">
              <div className="profile-photo container">
                <img 
                  src={this.props.dog.profilePhotoUrl}
                  alt="dog-pic"
                />
              </div>
              <div className="dog-show name-age">
                <p className="dog-name">{this.props.dog.name}</p>
                <p className="dog-age">{displayAge(this.props.dog.age)}</p>
              </div>
            </div>
            {/* Need to relook at this once connected with walk and request */}
            {/* <button className="small main button paw">Paw!</button> */}
            {this.displayEditButton()}
          </div>

          <div className="dog-show bgo-infor-container">
            <div className="dog-show bgo-infor">
              <div className="dog-show name">
                <p className="field-name">Breed</p>
                <p className="field-input">{this.props.dog.breed}</p>
              </div>

              <div className="dog-show age">
                <p className="field-name">Gender</p>
                <p className="field-input">{this.props.dog.gender}</p>
              </div>

              <div className="dog-show dogs">
                <p className="field-name">Owner</p>
                <Link
                  to={`/users/${this.props.dog.owner._id}`} 
                  className="field-input active-link"
                  >{this.props.dog.owner.name}
                </Link>
              </div>
            </div>
          </div>

          <div className="dog-show pictures">
            {this.displayAddPhoto()}
            {
              this.props.dog.photoURLs.map((url, i) => 
                <img
                  key={i}
                  src={url}
                  alt="dog-pic"
                  className="dog-show pic"
                />
              )
            }
          </div>
          { this.displayDeleteButton() }
        </div>
        <button
          onClick={this.handleGoBack}
          className="medium tertiary button"
        >Back
        </button>
      </div>
    );
  }
}

export default DogShow;