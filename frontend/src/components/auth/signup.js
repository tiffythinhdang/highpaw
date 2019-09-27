import React from 'react';
import '../../stylesheets/user_auth.scss'
import '../../stylesheets/index.scss'
import { changeSelectorColor } from "../../util/css_util";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      age: '',
      gender: '',
      active: {
        name: false,
        email: false,
        password: false,
        password2: false,
        age: false,
        gender: false,
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.clearSessionErrors();
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
    this.props.signup(this.state);
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
            <h1 className="form main header">Sign Up!</h1>
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
            <input type="password"
                   value={ this.state.password }
                   onChange={ this.update('password') }
                   placeholder={ "Password" }
                   className="form input"
            />
            <div className="errors">{this.props.errors.password}</div>
            <input type="password"
                   value={ this.state.password2 }
                   onChange={ this.update('password2') }
                   placeholder={ "Confirm Password" }
                   className="form input"
            />
            <div className="errors">{this.props.errors.password2}</div>
            <select name="" id="" onChange={ this.update('gender') } defaultValue={ "" } className="form input">
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
            <input type="submit" value="Submit" className="main large button"/>
            <button className="tertiary large button" onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}