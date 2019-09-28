import '../../stylesheets/walks_show.scss'

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ModifyRequestContainer from '../request/modify_request_container';
import FulfillRequestContainer from '../request/fulfill_request_container';


class WalksShowItem extends React.Component {
  constructor(props) {
    super(props);
   
  }

  componentDidMount() {
    // console.log(this.props.request)
    this.props.fetchUserFromRequest(this.props.request.requester)
  }

  handleDelete() {
    this.props.deleteWalk(this.props.match.params.id)
      .then(this.props.history.push('/walks'))
  }

  render() {
    // debugger;
    let reqUser;
    this.props.users.forEach(user => {
      if (this.props.request.requester == user._id && user._id !== this.props.currentUser.id) {
        reqUser = user
      }
    })
    if (!reqUser) return null

    return (

      <div className="request-item-main">
        {/* <Link to={`/users/${user._id}`} > */}
          <div className="request-user-information-container">
            <div className="req-user-icon"></div>
            <div className="req-user-name-container">
              <p className="req-user-name">{reqUser.name}</p>
              <p className="req user-age">{reqUser.age} {reqUser.age > 1 ? "yrs old" : "yr old"}</p>
            </div>
          </div>
        {/* </Link> */}
        <div className="req-user-btn">
          {/* <ModifyRequestContainer request={this.props.request} /> */}
          {this.props.request.status === "pending" ? <ModifyRequestContainer request={this.props.request}/> : ""}
          {this.props.request.status === "approved" ? <FulfillRequestContainer request={this.props.request} /> : ""}
        </div>
      </div> 

    )
  }
}

export default withRouter(WalksShowItem);