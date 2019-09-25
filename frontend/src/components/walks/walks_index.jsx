import React from 'react';
import WalksIndexItem from './walks_index_item';

class WalksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWalks();
  }

  render() {

    let walks = this.props.walks.map(walk => {
      return(
        <WalksIndexItem walk={walk} />
      )
    })

    return(
      <div className="walks-index-main">
        <div className="walks-index-top-buttons"></div>
        <div className="walks-head"></div>
        <div className="walks-index-container">
          {walks}
        </div>
      </div>
    )
  }
}

export default WalksIndex;