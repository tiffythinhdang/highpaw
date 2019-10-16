import React from 'react';
import { Link } from 'react-router-dom';
import RequestIndexItemContainer from './request_index_item_container';
import '../../stylesheets/request_index.scss';

export default class RequestIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserRequests();
  }

  handleBack(e) {
    e.preventDefault();
    if (this.props.history) {
      this.props.history.goBack();
    }
  }

  render() {

    let requests = this.props.requests.map((request, idx) => {
      return <RequestIndexItemContainer key={idx} idx={idx} requestId={request._id} status={request.status} walkId={request.walk} />
    })
    
    
    return (
      <div className="request-index outer-container">
        <div className="request-index-buttons-container">
          <Link to="/walks" >
            <button className="medium tertiary button">Back</button>
          </Link>
        </div>
        <p className="form main header">Your Requests</p>
        {requests}
      </div>
    )
  }
}