import '../../stylesheets/walks_index.scss'

import React from 'react';

class WalksIndexDogItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDogsFromWalk(this.props.walk._id)
  }

  renderDogs(dog) {
    return (
      <div className="walks-dog-information-container">
        <div className="walks-dog-icon">
        </div>
        <div className="walks-dog-name-container">
          <p className="walks-dog-name">{dog.name}</p>
          <p className="walks-dog-age">{dog.age}</p>
        </div>
      </div>
    )
  }

  render() {
    let walk = this.props.walk
    let dogs = this.props.dogs.map(dog => {
      return (
        this.renderDogs(dog)
      )
    })


    return (
      <div className="walks-items-container">
        <div className="walk-item-container">
          {dogs}
          <div className="walks-request-container">
          </div>
        </div>
      </div>
    )
  }
}

export default WalksIndexDogItem;