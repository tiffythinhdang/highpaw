import React from 'react';
import WalksIndexItemContainer from './walks_index_item_container';
import '../../stylesheets/walks_index.scss';
import { Link } from 'react-router-dom';

class WalksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWalks();
  }

  render() {
    if (!this.props.walks) return null;
// debugger
    let walks = this.props.walks.map(walk => {
      return(
        <WalksIndexItemContainer key={walk._id} walk={walk}/>
      )
    })

    return(
      <div className="walks-index-main">
        <div className="walks-index-top-buttons-container">
          <button className="walks-index-map-btn"></button>
          <Link to="/walks/create" className="walks-index-form-btn"> 
            <button className="walks-index-form-btn">Start a walk!</button>
          </Link>
        </div>
        <div className="walks-head">
          <p className="walks-head-text">active walks</p>
        </div>
        <div className="walks-items-container">
          {walks}
        </div>
      </div>
    )
  }
}

export default WalksIndex;