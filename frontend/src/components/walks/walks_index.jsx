import React from 'react';
import { Link } from 'react-router-dom';
import WalksIndexItemContainer from './walks_index_item_container';
import '../../stylesheets/walks_index.scss';
import Modal from '../modal/modal';

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

  handleBack(e) {
    e.preventDefault();
    if (this.props.history) {
      this.props.history.goBack();
    }
  }

  renderButtons() {

    let walks = this.props.walks;
    let currentUser = this.props.currentUser;

    for (let i = 0; i < walks.length; i++) {
      let walk = walks[i]
      if (walk.user === currentUser.id) {

        return (
          <div className="walks-index-top-buttons-container">
            <Link to="/requests">
              <button className="medium main button">Your Requests</button>
            </Link>

            {/* <button className="medium tertiary button" onClick={this.handleBack}>Back</button> */}
            <Link to={`/walks/${walk._id}`} >
              <button className="medium secondary button">Your walk</button>
            </Link>
            {/* <button className="walks-index-form-btn inactive">Start a walk!</button> */}
          </div>
        )
      }
    }

    return (
      <div className="walks-index-top-buttons-container">
        <Link to="/requests">
          <button className="medium main button">Your Requests</button>
        </Link>
        {/* <button className="medium tertiary button" onClick={this.handleBack}>Back</button> */}
        {/* <button className="walks-index-map-btn inactive">Your walk</button> */}
        <Link to="/walks/create" >
          <button className="medium secondary button">Start a walk!</button>
        </Link>
      </div>
    )
  }

  render() {
    if (!this.props.currentUser) return null;
    if (!this.props.walks) return null;
    let walks = this.props.walks.map(walk => {
      return (
        <WalksIndexItemContainer key={walk._id} walk={walk} />
      )
    })

    return (
      <div className="walks-index-main">
        <Modal/>
        <div className="walks-index-container">
          {this.renderButtons()}

          {/* <div className="walks-head"> */}
          <p className="form main header">Active walks</p>
          {/* </div> */}
          <div className="walks-items-container">
            {walks}
          </div>
        </div>
      </div>
    )
  }
}

export default WalksIndex;