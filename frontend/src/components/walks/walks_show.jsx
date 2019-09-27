import '../../stylesheets/walks_show.scss'

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Map from '../map/map'

class WalksShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteWalk(this.props.match.params.id)
      .then(this.props.history.push('/walks'))
  }

  render() {
    // debugger;

    return (

      <div className="walks-show-main">
        <div className="walks-show-buttons-container">
          <Link to="/walks" >
            <button className="walks-show-back-btn">Back</button>
          </Link>
          <button className="walks-show-chat-btn">Chat</button>
        </div>
        <div className="walks-head-container">Your walk</div>
        <div className="walks-map-container">
          <Map />
        </div>
        <button className="walks-delete-btn" onClick={this.handleDelete}>Delete walk</button>
      </div>

    )
  }
}

export default withRouter(WalksShow);