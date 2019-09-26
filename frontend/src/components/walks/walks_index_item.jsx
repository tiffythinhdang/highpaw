import '../../stylesheets/walks_index.scss'

import React from 'react';

class WalksIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDogsFromWalk(this.props.walk._id)
  }

  render() {
    debugger;
    let walk = this.props.walk
    // if (this.props.dogs.length < 1) return null;

    return(
      <div className="walks-items-container">
        <div className="walk-item-container">
          <div className="walks-dog-information-container">
            <div className="walks-dog-icon"></div>
            <div className="walks-dog-name-container">
              <p className="walks-dog-name"></p>
              <p className="walks-dog-age">age</p>
            </div>
          </div>
          <div className="walks-request-container">
            {/* jason's spot */}
          </div>
        </div>
      </div>
    )
  }
}

export default WalksIndexItem;