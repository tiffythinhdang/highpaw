import React from 'react';
import RequestIndexItemContainer from './request_index_item_container';

export default class RequestIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserRequests();
  }

  render() {

    let requests = this.props.requests.map((request, idx) => {
      return <RequestIndexItemContainer key={idx} idx={idx} requestId={request._id} status={request.status} walkId={request.walk} />
    })
    
    
    return (
      <div>
        <p className="form main header">Your Requests</p>
        {requests}
      </div>
    )
  }
}