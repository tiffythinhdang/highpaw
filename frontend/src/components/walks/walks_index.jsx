import React from 'react';
import WalksIndexItemContainer from './walks_index_item_container';
import '../../stylesheets/walks_index.scss';
import { Link } from 'react-router-dom';

class WalksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.fetchWalks();
  }

  componentWillUnmount() {
    
  }

  // shouldComponentUpdate(prevState) {
  //   return this.state.loaded != prevState.loaded
  // }

  renderButtons() {
    // debugger
    // this.setState({ loaded: true })
    let walks = this.props.walks;
    let currentUser = this.props.currentUser;

    for (let i = 0; i < walks.length; i++) {
      let walk = walks[i]
      if (walk.user === currentUser.id) {
        
        return (
          <div className="walks-index-top-buttons-container">
            <Link to={`/walks/${walk._id}`} >
              <button className="walks-index-map-btn">Your walk</button>
            </Link>
            {/* <Link to="/walks/create" className="walks-index-form-btn"> */}
            <button className="walks-index-form-btn inactive">Start a walk!</button>
            {/* </Link> */}
          </div>
        )
      }
    }


    return (
      <div className="walks-index-top-buttons-container">
        <button className="walks-index-map-btn inactive">Your walk</button>
        <Link to="/walks/create" className="walks-index-form-btn">
          <button className="">Start a walk!</button>
        </Link>
      </div>
    )
  }

  render() {
    // debugger
    if (!this.props.currentUser) return null;
    if (!this.props.walks) return null;
    // debugger
    let walks = this.props.walks.map(walk => {
      return (
        <WalksIndexItemContainer key={walk._id} walk={walk} />
      )
    })

    return (
      <div className="walks-index-main">
        {this.renderButtons()}




        <div className="walks-head">
          <p className="walks-head-text">Active walks</p>
        </div>
        <div className="walks-items-container">
          {walks}
        </div>
      </div>
    )
  }
}

export default WalksIndex;