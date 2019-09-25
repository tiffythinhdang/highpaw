import React from 'react';

import '../../stylesheets/walks_form.scss';

class WalksForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  //   let walk = this.props.walk

  //   walk.dogs.forEach(dog => {
  //     this.props.fetchDog(dog)
  //   })
  }

  // handleSubmit() {
  //   e.preventDefault();
  //   this.props.createWalks({
  //     dogs: [],
  //     user: this.props.currentUser
  //   })
  // }

  render() {

    let dogs = this.props.dogs

    return(
      <div className="walks-form-main">
        <div className="walks-form-head">
          <p className="walks-form-head-text">Pick your dog(s) to walk</p>
        </div>
        <div className="walks-form-dogs-container">
          <form>
          
          </form>
        </div>
        <div className="walks-submit-btn-container">
          <button className="walks-submit-btn" onClick={this.handleSubmit}></button>
        </div>
      </div>
    )
  }
}

export default WalksForm;