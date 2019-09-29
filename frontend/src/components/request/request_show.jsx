import '../../stylesheets/walks_show.scss'

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MapContainer from '../map/map_container';
// import WalkShowItemContainer from './walks_show_item_container';

class RequestShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleMapBtn = this.handleMapBtn.bind(this);
    this.handleChat = this.handleChat.bind(this);
    // this.handleReqBtn = this.handleReqBtn.bind(this);
  }

  componentDidMount() {
    // debugger;
    // this.props.fetchRequests(this.props.match.params.id)
    // this.props.receiveRoom(this.props.match.params.requestId)
  }

  componentWillUnmount() {
    // this.props.receiveLeaveRoom(this.props.match.params.requestId)
  }

  handleDelete() {
    // debugger
    this.props.deleteRequest(this.props.match.params.requestId)
      .then(this.props.history.push('/walks'))
  }

  renderMap() {
    if (!this.state.map) {
      return (
        <div className="show-map-container">
          mapmapmap
        <MapContainer />
        </div> 
      )
    } else {
      return (<div></div>)
    }
  }

  renderButtons() {
    if (!this.state.map) {
      return <button className="walks-show-map-btn" onClick={this.handleMapBtn}>Show Map</button>
    } else {
      return <button className="walks-show-map-btn" onClick={this.handleReqBtn}>Show Requests</button>
    }
  }

  handleChat() {
    this.props.history.push(`/requests/${this.props.match.params.requestId}/chat`)
  }


  handleMapBtn() {
    this.setState({ map: true })
  }

  handleReqBtn() {
    this.setState({ map: false })
  }

  render() {
    // let requests = this.props.requests.map(request => {
    //   return (
    //     // <WalkS request={request} />
    //   )
    // })

    return (

      <div className="walks-show-main">
        <div className="walks-show-buttons-container">
          <Link to="/walks" >
            <button className="walks-show-back-btn">Back</button>
          </Link>
          <button className="walks-show-chat-btn" onClick={this.handleChat}>Chat</button>
        </div>
        <div className="form main header">Paw dog</div>
        {this.renderMap()}
        <div className="walks-delete-button-container">
          <button className="walks-delete-btn" onClick={this.handleDelete}>Delete request</button>
          {/* {this.renderButtons()} */}
        </div>
      </div>

    )
  }
}

export default withRouter(RequestShow);