import '../../stylesheets/walks_show.scss'

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Map from '../map/map'
import WalkShowItemContainer from './walks_show_item_container';

class WalksShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchRequests(this.props.match.params.id)
  }

  handleDelete() {
    this.props.deleteWalk(this.props.match.params.id)
      .then(this.props.history.push('/walks'))
  }

  render() {
    // debugger;
    let requests = this.props.requests.map(request => {
      return (
        <WalkShowItemContainer request={request} /> 
      )
    })


    return (

      <div className="walks-show-main">
        <div className="walks-show-buttons-container">
          <Link to="/walks" >
            <button className="walks-show-back-btn">Back</button>
          </Link>
          <button className="walks-show-chat-btn">Chat</button>
        </div>
        <div className="walks-head-container">Your walk</div>
        {/* <div className="walks-map-container">
          <Map />
        </div> */}
        <div className="walks-req-container">
          <p className="walks-req-head">Active requests</p>
          <div className="walks-req-index">
            {requests}
          </div>
        </div>
        <div className="walks-delete-button-container">
          <button className="walks-delete-btn" onClick={this.handleDelete}>Delete walk</button>
          <button className="walks-show-map-btn" onClick={this.handleMapBtn}>Show Map</button> 
        </div>
      </div>

    )
  }
}

export default withRouter(WalksShow);