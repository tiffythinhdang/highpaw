import '../../stylesheets/walks_show.scss'

import React from 'react';
import { Link } from 'react-router-dom';

class WalksShow extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchDogsFromWalk(this.props.walk._id)
  // }

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
    // let walk = this.props.walk

    // let dogs = this.props.dogs.map(dog => {
    //   if (this.props.walk.dogs.includes(dog._id)) {
    //     return (
    //       this.renderDogs(dog)
    //     )
    //   }
    // })


    return (

      <div className="walks-show-main">
        <div className="walks-show-buttons-container">
          <button className="walks-show-back-btn"></button>
          <button className="walks-show-chat-btn"></button>
        </div>
        <div className="walks-head-container"></div>
        <div className="walks-map-container"></div>
        <button className="walks-delete-btn">Delete walk</button>
      </div>

      // <div className="walk-item-container">
      //   <div className="walk-dogs-container">
      //     {dogs}
      //   </div>
      //   <div className="walks-request-container">
      //   </div>
      // </div>
    )
  }
}

export default WalksShow;