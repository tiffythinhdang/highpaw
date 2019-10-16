import '../../stylesheets/walks_show.scss'

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MapContainer from '../map/map_container';
import WalkShowItemContainer from './walks_show_item_container';

class WalksShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: false,
      approved: []
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleMapBtn = this.handleMapBtn.bind(this);
    this.handleReqBtn = this.handleReqBtn.bind(this);
  }

  componentDidMount() {
    this.props.fetchRequests(this.props.match.params.id)
  }



  handleDelete() {
    this.props.deleteWalk(this.props.match.params.id)
      .then(this.props.history.push('/walks'))
  }

  renderMap(requests) {
    let approvedReq = this.props.requests.filter((request) => request.status === "approved")
    let approvedReqIds = approvedReq.map((request) => request._id)
    
    if (!this.state.map) {
      return (
        <div className="walks-req-container">
          {/* // <p className="walks-req-head">Active requests</p> */}
          <div className={requests.length > 0 ? "walks-req-index" : "walks-no-req"}>
            {requests.length > 0 ? requests : (<p>
              You have no requests yet!
            </p>)}
          </div>
        </div>
      )
    } else {
      return (
        <div className="walks-map-container">
          <MapContainer approved={approvedReqIds} />
        </div> 
      )
    }
  }

  renderButtons() {
    if (!this.state.map) {
      return <button className="secondary medium button" onClick={this.handleMapBtn}>Show Map</button>
    } else {
      return <button className="secondary medium button" onClick={this.handleReqBtn}>Show Requests</button>
    }
  }

  handleMapBtn() {
    this.setState({ map: true })
  }

  handleReqBtn() {
    this.setState({ map: false })
  }

  render() {
    // debugger
    let walkId = this.props.match.params.id;

    let requests = this.props.requests.map(request => {
      if (request.walk === walkId) {
        return (
          <WalkShowItemContainer request={request} />
        )
      }
    })

    return (

      <div className="walks-show-main">
        <div className="walks-show-main-container">
        <div className="walks-show-buttons-container">
          <Link to="/walks" >
            <button className="medium tertiary button">Back</button>
          </Link>
          {/* <button className="walks-show-chat-btn" >Chat</button> */}
        </div>
        <div className="form main header">Your walk</div>
        <div className="walks-show-container">
            {this.renderMap(requests)}
          <div className="walks-delete-button-container">
            <button className="main medium button" onClick={this.handleDelete}>Delete walk</button>
            {this.renderButtons()}
            {/* comment back in if needed. and change back to space-between css */}
          </div>

        </div>
        </div>
      </div>

    )
  }
}

export default withRouter(WalksShow);