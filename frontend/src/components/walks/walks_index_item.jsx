import '../../stylesheets/walks_index.scss'

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SendRequestContainer from '../request/send_request_container';

class WalksIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleAccept = this.handleAccept.bind(this)
  }

  componentDidMount() {
    this.props.fetchRequests(this.props.walk._id)
    this.props.fetchDogsFromWalk(this.props.walk._id);
  }

  renderDogs(dog) {
    return (
      <Link to={`/dogs/${dog._id}`} key={dog._id} >
        <div className="walks-dog-information-container">
          <div className="profile-photo container">
            <img
              src={dog.profilePhotoUrl}
              alt="dog-pic"
            />
          </div>
          <div className="walks-dog-name-container">
            <p className="walks-dog-name">{dog.name}</p>
            <p className="walks-dog-age">{dog.age} {dog.age > 1 ? "yrs old" : "yr old"}</p>
          </div>
        </div>
      </Link>
    )
  }

  handleAccept() {
    let request = this.props.requests.find(request => this.props.requests.includes(request) && request.walk === this.props.walk._id)
    this.props.history.push(`/requests/${request._id}`)
  }

  renderReqBtn() {
    let walk = this.props.walk

    if (walk.user === this.props.currentUser.id) {
      return <button className="your-dog-button">Your dog</button>
    }

    // if error, check if at least one dummy request is in this.props.requests array in mongoDB or get rid of requests.length if statement.

    if (this.props.requests.length !== 0) {
      let request = this.props.requests.find(request => this.props.requests.includes(request) && request.walk === this.props.walk._id)
      // debugger
      if (request) {
        if (request.status === "pending") {
          return <SendRequestContainer walk={walk} request={request} requested={true} />
        } else if (request.status === "approved" && request.requester === this.props.currentUser.id) {
          return <button className="small main button" onClick={this.handleAccept}>Accepted</button>
        } else {
          return <SendRequestContainer walk={walk} request={request} requested={false} />
        }
      } else {
        return <SendRequestContainer walk={walk} requested={true} />
      }
    }
  }

    render() {

      if (!this.props.currentUser) return null;
      if (!this.props.dogs) return null;
      if (!this.props.requests) return null;

      let dogs = this.props.dogs.map(dog => {
        if (this.props.walk.dogs.includes(dog._id)) {
          return (
            this.renderDogs(dog)
          )
        }
      })

      return (
        <div className="walk-item-container">
          <div className="walk-dogs-container">
            {dogs}
          </div>
          <div className="walks-request-container">
            {this.renderReqBtn()}
          </div>
        </div>
      )
    }
  }

  export default withRouter(WalksIndexItem);