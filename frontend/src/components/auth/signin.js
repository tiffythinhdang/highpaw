import React from 'react';
import '../../stylesheets/user_auth.scss'
import { Link } from 'react-router-dom'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      active: {
        email: false,
        password: false,
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearSessionErrors();
    this.props.login(this.state).then(() => {
      console.log('redirecting...');
      // this.props.history.push('/')
    });
  }

  componentDidMount() {
    this.props.clearSessionErrors();
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
            <h1 className="form main header">Log In!</h1>
            <input type="text"
                   value={ this.state.email }
                   onChange={ this.update('email') }
                   placeholder={ "Email" }
                   className="form input"
            />
            <h3 className="errors">{ this.props.errors.email }</h3>
            <input type="password"
                   value={ this.state.password }
                   onChange={ this.update('password') }
                   placeholder={ "Password" }
                   className="form input"
            />
            <h3 className="errors">{ this.props.errors.password }</h3>
            <input type="submit" value="Submit" className="main large button"/>
            <button className="tertiary large button" onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}