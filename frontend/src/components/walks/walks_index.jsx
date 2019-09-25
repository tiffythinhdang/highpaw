import React from 'react';
import WalksIndexItem from './walks_index_item';
import '../../stylesheets/walks.scss';
import { Link } from 'react-router-dom';

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
        <WalksIndexItem walk={walk} fetchDog={this.props.fetchDog}/>
      )
    })

    return(
      <div className="walks-index-main">
        <div className="walks-index-top-buttons-container">
          <button className="walks-index-map-btn"></button>
          <Link to="/walks/create" className="walks-index-form-btn"> 
            <button className="walks-index-form-btn"></button>
          </Link>
        </div>
        <div className="walks-head">
          <p className="walks-head-text">active walks</p>
        </div>
        {walks}
      </div>
    )
  }
}

export default WalksIndex;