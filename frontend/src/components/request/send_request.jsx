import React from 'react';
import '../../stylesheets/index.scss';
const io = require('socket.io-client');


export default class SendRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // walk: this.props.walk,
      requester: this.props.requester
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePending = this.handlePending.bind(this)
  }

  componentDidMount() {
    this.socket = io();
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    // const pending = document.getElementById(`pending-button${this.props.walk}`);
    // const paw = document.getElementById(`paw-button${this.props.walk}`);
    // pending.classList.toggle('hidden');
    // paw.classList.toggle('hidden')
    // debugger
    this.props.receiveRoom(this.props.walk.user);
    this.props.receiveRoom(this.props.requester);
    let requestInfo = { action: 'sendRequest', value: { approvalRoom: this.props.walk.user, requster: this.props.requester } }
    this.props.receiveEmit(requestInfo);

    // this.socket.emit('joinRoom', this.props.walk.user)
    // this.socket.emit('joinRoom', this.props.requester)
    // let requestInfo = { approvalRoom: this.props.walk.user, requster: this.props.requester}
    // this.socket.emit('sendRequest', requestInfo)
    // this.socket.on('success', (res) => console.log(res))
    this.props.paw(this.props.walk._id)
  }

  handlePending(e) {
    e.preventDefault();
    // const pending = document.getElementById(`pending-button${this.props.walk}`);
    // const paw = document.getElementById(`paw-button${this.props.walk}`);
    // pending.classList.toggle('hidden');
    // paw.classList.toggle('hidden');
    this.props.deleteRequest(this.props.request._id)
  }

  render() {
    // if (!this.props.request) return null;
    return (
      <form>
        <input type="hidden" value={this.props.requester} />
        <input type="hidden" value={this.state.walk} />
        <button className={this.props.request ? "hidden" : "small main button"}
          id={`paw-button${this.props.walk}`}
          onClick={this.handleSubmit}>
          Paw!
        </button>
        <button className={this.props.request ? "small main button" : "hidden"}
          id={`pending-button${this.props.walk}`}
          onClick={this.handlePending}>
          Pending
        </button>
      </form>
    )
  }
}

/*
In walk index where you search,
a walk index item will import the container of this.
I'm getting the requester from the current user in state,
and the component will need the walk._id from your walk index item with name walk
*/