import '../../stylesheets/walks_show.scss'
import React from 'react';
const io = require('socket.io-client');

export default class ModifyRequest extends React.Component {
  constructor(props) {
    super(props);
    this.handleApprove = this.handleApprove.bind(this);
    this.handleDeny = this.handleDeny.bind(this);
    
  }

  componentDidMount() {
    this.socket = io();
  }

  handleApprove(e) {
    e.preventDefault()

    let approval = { _id: this.props.request._id, status: "approved" }

    // this.props.receiveRoom(this.props.request.requester);
    // this.socket.emit('joinRoom', this.props.request.requester )
    // this.socket.on('success', (res) => console.log(res))
    this.props.modify(approval);
  }

  handleDeny(e) {
    e.preventDefault();
    // let denial = { _id: this.props.request._id, status: "denied" }
    // this.props.modify(denial)
    this.props.deleteRequest(this.props.request._id)
  }

  render() {
    return (
      <form>
        <button className="small button modify-approve" onClick={this.handleApprove} >Approve</button>
        {/* <button className="small disabled button" onClick={this.handleDeny} >Deny</button> */}
        <button className="small button modify-deny" onClick={this.handleDeny} >Deny</button> 
      </form>
    )
  }
}

/*
import the container of this in your walk show page which has all the requests from that walk. 
in each of those request item. do {request.status === "pending" ? <ModifyRequestComponent /> : "" } and pass in the request as props
*/