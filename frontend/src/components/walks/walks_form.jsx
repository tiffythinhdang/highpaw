import React from 'react';
import { withRouter } from 'react-router-dom';

import '../../stylesheets/walks_form.scss';

class WalksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  componentDidMount() {

    this.props.fetchDogsFromUser(this.props.currentUser.id)
  }

  handleSubmit(e) {
    // debugger;
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
    // console.log("clicked")
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

        <input type="checkbox" value={JSON.stringify(dog)} id="walk-checkbox" onClick={this.handleCheckbox}/>
        {dog.name}
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
        <div className="walks-form-head">
          <p className="walks-form-head-text">Pick your dog(s) to walk</p>
        </div>
        <form className="dog-checkbox-container">
          {dogs}
          <div className="walks-submit-btn-container">
            <button className="walks-submit-btn" onClick={this.handleSubmit}>Start your walk!</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(WalksForm);