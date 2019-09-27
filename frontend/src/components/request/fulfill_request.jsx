import React from 'react';

export default class FulfillRequest extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleFulfilled = this.handleFulfilled.bind(this);
  }

  handleFulfilled(e) {
    e.preventDefault();
    // let fufillment = { _id: this.props.review._id, status: "fulfilled" }
    // this.props.fulfill(fufillment)
    this.props.deleteRequest(this.props.request._id) 
  }

  render() {
    return (
      <form>
        <button className="small button pawed-btn" onClick={this.handleFulfilled}>Pawed</button>
      </form>
    )
  }
}

/*
import the container of this in your walk show page which has all the requests from that walk. 
in each of those request item. do {request.status === "approved" ? <FulfillRequestComponent /> : "" } and pass in the review as props
*/