import '../../stylesheets/walks_index.scss'

import React from 'react';
import { Link } from 'react-router-dom';
import SendRequestContainer from '../request/send_request_container';

class WalksIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDogsFromWalk(this.props.walk._id);
    this.props.fetchRequests(this.props.walk._id)
  }

  renderDogs(dog) {
    return (
      <Link to={`/dogs/${dog._id}`} key={dog._id} >
        <div className="walks-dog-information-container">
          <div className="walks-dog-icon">
            <img
              src="https://www.thesprucepets.com/thmb/KEkwV1YeL3obCMo0YSPDXTCxjRA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/19933184_104417643500613_5541725731421159424_n-5ba0548546e0fb0050edecc0.jpg"
              alt="dog-pic"
              className="profile-img"
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

  renderReqBtn() {
    let walk = this.props.walk
    // debugger
    if (walk.user == this.props.currentUser.id) {
      return <button className="your-dog-button">Your dog</button>
    }
    // for (let i = 0; i < requesters.length; i++) {
    //   let requester = requesters[i];
    //   if (requester === walk.user) {

    // }
    // }
    // let requesters = this.props.requests.map(request => request.requester)
    // if (requesters.includes(this.props.currentUser.id)) {
    let request = this.props.requests.find(request => this.props.requests.includes(request))
      if (request) {
        return <SendRequestContainer walk={walk} request={request} requested={true} />
      } else {
        return <SendRequestContainer walk={walk} request={request} requested={false} />
      }
  }

  render() {
    // debugger;
    if (!this.props.currentUser) return null;
    let walk = this.props.walk

    let dogs = this.props.dogs.map(dog => {
      if (this.props.walk.dogs.includes(dog._id)) {
        return (
          this.renderDogs(dog)
        )
      }
    })
    if (!this.props.requests) return null;



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

export default WalksIndexItem;