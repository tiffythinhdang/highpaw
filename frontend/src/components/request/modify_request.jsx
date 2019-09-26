import React from 'react';

export default class ModifyRequest extends React.Component {
  constructor(props) {
    super(props);

    this.handleApprove = this.handleApprove.bind(this);
    this.handleDeny = this.handleDeny.bind(this);
  }

  handleApprove(e) {
    e.preventDefault()
    let approval = { _id: this.props.request._id, status: "approved" }
    this.props.modify(approval);
  }

  handleDeny(e) {
    e.preventDefault();
    let denial = { _id: this.props.request._id, status: "denied" }
    this.props.modify(denial)
  }

  render() {
    return (
      <form>
        <button className="" onClick={this.handleApprove} >Approve</button>
        <button className="samll disabled button" onClick={this.handleDeny} >Deny</button>
      </form>
    )
  }
}

/*
import the container of this in your walk show page which has all the requests from that walk. in each of those request item. do {request.status === "pending" ? <ModifyRequestComponent /> : "" } and pass in the request as props
*/