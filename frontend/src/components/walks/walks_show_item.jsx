import '../../stylesheets/walks_show.scss'

import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class WalksShow extends React.Component {
  constructor(props) {
    super(props);
   
  }

  componentDidMount() {
    console.log(this.props.request)
    this.props.fetchUserFromRequest(this.props.request.requester)
  }

  handleDelete() {
    this.props.deleteWalk(this.props.match.params.id)
      .then(this.props.history.push('/walks'))
  }

  render() {
    // debugger;
    let reqUser;
    this.props.user.forEach(user => {
      if (this.props.request.requester == user._id) {
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
        <button className="req-user-btn"></button>
      </div> 

    )
  }
}

export default withRouter(WalksShow);