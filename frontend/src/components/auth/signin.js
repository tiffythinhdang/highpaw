import React from 'react';
import '../../stylesheets/user_auth.scss'

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
    this.demoClickHandler = this.demoClickHandler.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    if (e) e.preventDefault(); 
    this.props.clearSessionErrors();
    this.props.login(this.state).then(() => {
      if (!this.props.errors.email && !this.props.errors.password) this.props.history.push('/walks');
    });
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.history.push('/')
  }

  demoClickHandler(e) {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    })
    this.setEmail();
  }

  setEmail(demoEmail) {
    // we can change the email later. just don't want to seed yet and destroy tiff's aws
    demoEmail = demoEmail || 'brian@email.com'.split('');

    setTimeout(() => {
      this.setState({
        email: this.state.email + demoEmail.shift()
      });
      demoEmail.length > 0 ? this.setEmail(demoEmail) : this.setPassword()
    }, 100)
  }

  setPassword(demoPassword) {
    demoPassword = demoPassword || '123456'.split('');

    setTimeout(() => {
      this.setState({
        password: this.state.password + demoPassword.shift()
      });
      demoPassword.length > 0 ? this.setPassword(demoPassword) : this.handleSubmit()
    }, 100)
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <h1 className="form main header">Log In!</h1>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder={"Email"}
              className="form input"
            />
            <div className="errors">{this.props.errors.email}</div>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder={"Password"}
              className="form input"
            />
            <div className="errors">{this.props.errors.password}</div>
            <input type="submit" value="Submit" className="main large button" />
            <button className="secondary large button" onClick={this.demoClickHandler}>Demo user</button>
            <button className="tertiary large button" onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}