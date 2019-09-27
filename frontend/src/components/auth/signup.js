import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/user_auth.scss';
import '../../stylesheets/index.scss';
import iconPaw from '../../assets/large_icon_pawprint.png';

import { changeSelectorColor } from "../../util/css_util";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.form;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount(){
    this.props.clearSessionErrors();
  }

  displayPasswordField(){
    if (!this.props.currentUser) {
      return (
        <div className="password-section">
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder={"Password"}
            className="form input"
          />
          <div className="errors">{this.props.errors.password}</div>

          <input type="password"
            value={this.state.password2}
            onChange={this.update('password2')}
            placeholder={"Confirm Password"}
            className="form input"
          />
        </div>
      )
    }
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
          this.setState({ profilePhotoUrl: url })
        }
        else {
          alert('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  }

  update(field) {
    return e => {
      if (e.target.tagName === "SELECT") {changeSelectorColor(e.target)}
      this.setState({
        [field]: e.currentTarget.value
      })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(payload => {
        if (payload.user) this.props.history.push(`/users/${payload.user.data._id}`)
      })
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={ this.handleSubmit }>
          <div className="login-form">
            <h1 className="form main header">{this.props.header}</h1>

            <div className="photo-upload input">
              <div className="profile-photo container">
                {this.state.profilePhotoUrl ? <img src={this.state.profilePhotoUrl} /> : <img className="medium light icon dog" src={iconPaw} />}
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

            <input type="text"
                   value={ this.state.email }
                   onChange={ this.update('email') }
                   placeholder={ "Email" }
                   className="form input"
            />
            <div className="errors">{this.props.errors.email}</div>

            <input type="text"
                   value={ this.state.name }
                   onChange={ this.update('name') }
                   placeholder={ "Name" }
                   className="form input"
            />
            <div className="errors">{this.props.errors.name}</div>

            {this.displayPasswordField() }

            <div className="errors">{this.props.errors.password2}</div>

            <select name="" id="" onChange={this.update('gender')} value={this.state.gender} className="form input">
              <option value=""
                      disabled={ true }>{ "Gender *not required" }</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div className="errors">{this.props.errors.gender}</div>

            <input
              type="number"
              value={ this.state.age }
              onChange={ this.update('age') }
              placeholder={ this.props.errors.age ? this.props.errors.age : "Age" }
              className="form input"
            />
            <div className="errors">{this.props.errors.age}</div>

            <input type="submit" value={this.props.formType} className="main large button"/>
            <button className="tertiary large button" onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
