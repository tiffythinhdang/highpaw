import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../stylesheets/walks_form.scss';
const io = require('socket.io-client');



class WalksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      submitting: false
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    this.props.fetchDogsFromUser(this.props.currentUser.id)

    this.socket = io();
  }

  handleSubmit(e) {
    this.setState({ submitting: true })
    e.preventDefault();
    this.props.createWalk({
      dogs: this.state.dogs,
      user: this.props.currentUser
    });
    // this.props.receiveRoom(this.props.currentUser.id)
    // this.socket.emit('joinRoom', this.props.currentUser.id)
    // this.socket.on('success', (res) => console.log(res))

    this.props.history.push('/walks')
  }

  handleCheckbox(e) {
    console.log("clicked")
    let dog = JSON.parse(e.target.value)
    if (this.state.dogs.includes(dog)) {
      this.setState({
        dogs: this.state.dogs.filter(dog => !dog)
      })
    } else {
      this.setState({
        dogs: this.state.dogs.concat(dog)
      })
    }
  }

  showDogs(dog) {
    return (

      <div className="walks-form-dogs-item-container" key={dog.name}>
        <label className="walks-form-dogs-item">
          <input type="checkbox" value={JSON.stringify(dog)} className="walk-checkbox" onClick={this.handleCheckbox} />
          <img
            src="https://www.thesprucepets.com/thmb/KEkwV1YeL3obCMo0YSPDXTCxjRA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/19933184_104417643500613_5541725731421159424_n-5ba0548546e0fb0050edecc0.jpg"
            alt="dog-pic"
            className="form-profile-img"
          />
        </label>
        <p className="walk-form-name">{dog.name}</p>

      </div>

    )
  }

  render() {
    if (!this.props.dogs) return null;
    if (!this.props.currentUser) return null;

    let dogs = this.props.dogs.map(dog => {
      if (dog.owner === this.props.currentUser.id) {
        return this.showDogs(dog)
      }
    })

    return (
      <div className="walks-form-main">
        <div className="walks-form-back-container">
          <Link to="/walks" className="walks-form-back-btn" >
            <button>Back to walks</button>
          </Link>

        </div>
        <div className="walks-form-head">
          <p className="walks-form-head-text">Pick your dog(s) to walk</p>
        </div>
        <div className="dog-form-container">
          <form className="dog-checkbox-container">
            {dogs}
          </form>
          <button className="walks-submit-btn" onClick={this.handleSubmit}>Start your walk!</button>
        </div>
      </div>
    )
  }
}

export default withRouter(WalksForm);