import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../stylesheets/walks_form.scss';

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
// debugger
    this.props.fetchDogsFromUser(this.props.currentUser.id)
  }

  handleSubmit(e) {
    // debugger;
    this.setState({ submitting: true })
    e.preventDefault();
    // console.log(this.state.dogs + "dogs")
    // console.log(this.props.currentUser + "cu")
    this.props.createWalk({
      dogs: this.state.dogs,
      user: this.props.currentUser
    });
    this.props.history.push('/walks')
  }

  handleCheckbox(e) {
    // debugger
    console.log("clicked")
    // console.log(this.state.dogs)
    // console.log(this.state)
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
    // debugger
    return (

      <div className="walks-form-dogs-item-container">
        <label className="walks-form-dogs-item">
          <input type="checkbox" value={JSON.stringify(dog)} class="walk-checkbox" onClick={this.handleCheckbox} />
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
    // debugger;
    if (!this.props.dogs) return null;
    if (!this.props.currentUser) return null;

    let dogs = this.props.dogs.map(dog => {
      return this.showDogs(dog)
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
            {/* <div className="walks-submit-btn-container">
            </div> */}
          </form>
          <button className="walks-submit-btn" onClick={this.handleSubmit}>Start your walk!</button>
        </div>
      </div>
    )
  }
}

export default withRouter(WalksForm);