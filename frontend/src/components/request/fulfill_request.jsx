import React from 'react';
import { withRouter } from 'react-router-dom';

class FulfillRequest extends React.Component {

  constructor(props) {
    super(props);
    
    this.handlePush = this.handlePush.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handlePush(e) {
    e.preventDefault();
    // debugger
    // console.log('hi')
    this.props.history.push(`/requests/${this.props.request._id}/chat`)
    // let fufillment = { _id: this.props.review._id, status: "fulfilled" }
    // this.props.fulfill(fufillment)
    // this.props.deleteRequest(this.props.request._id) 
  }

  handleDelete(e) {
    e.preventDefault()
    this.props.deleteRequest(this.props.request._id)
  }

  render() {
    return (
      <form>
        <button className="small button tertiary chatbtn" onClick={this.handlePush}>Chat!</button>
        <button className="small button pawed-btn" onClick={this.handleDelete}>Pawed</button>
      </form>
    )
  }
}

export default withRouter(FulfillRequest)

/*
import the container of this in your walk show page which has all the requests from that walk. 
in each of those request item. do {request.status === "approved" ? <FulfillRequestComponent /> : "" } and pass in the review as props
*/