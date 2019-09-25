import '../../stylesheets/walks_index.scss'

import React from 'react';

class WalksIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchDog(this.props.walk.dog[0])
  }

  render() {
    // debugger;
    let walk = this.props.walk

    return(
      <div className="walks-items-container">
        <div className="walk-item-container">
          <div className="walks-dog-information-container">
            <div className="walks-dog-icon"></div>
            <div className="walks-dog-name-container">
              <p className="walks-dog-name">dog1</p>
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