import '../../stylesheets/walks_index.scss'

import React from 'react';
import { Link } from 'react-router-dom';

class WalksIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDogsFromWalk(this.props.walk._id)
  }

  renderDogs(dog) {
    return (
      <Link to={`/dogs/${dog._id}`} key={dog._id} >
        <div className="walks-dog-information-container">
          <div className="walks-dog-icon">
            <img
              src="https://www.thesprucepets.com/thmb/KEkwV1YeL3obCMo0YSPDXTCxjRA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/19933184_104417643500613_5541725731421159424_n-5ba0548546e0fb0050edecc0.jpg"
              alt="dog-pic"
              className="profile-img"
            />
          </div>
          <div className="walks-dog-name-container">
            <p className="walks-dog-name">{dog.name}</p>
            <p className="walks-dog-age">{dog.age} {dog.age > 1 ? "yrs old" : "yr old"}</p>
          </div>
        </div>
      </Link>
    )
  }

  render() {
    // debugger;
    let walk = this.props.walk
    // if (this.props.dogs.length < 1) return null;

    let dogs = this.props.dogs.map(dog => {
      if (this.props.walk.dogs.includes(dog._id)) {
        return (
          this.renderDogs(dog)
        )
      }
    })


    return (
      // <div className="walks-items-container">
      <div className="walk-item-container">
        <div className="walk-dogs-container">
          {dogs}
        </div>
        {/* <div className="walks-dog-information-container">
            <div className="walks-dog-icon"></div>
            <div className="walks-dog-name-container">
              <p className="walks-dog-name"></p>
              <p className="walks-dog-age">age</p>
            </div>
          </div> */}

        <div className="walks-request-container">
          {/* jason's spot */}
        </div>
      </div>
      // </div>
    )
  }
}

export default WalksIndexItem;