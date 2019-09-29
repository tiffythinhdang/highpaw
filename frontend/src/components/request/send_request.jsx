import React from 'react';
import '../../stylesheets/index.scss';



export default class SendRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requester: this.props.requester,
      loading: true,
      sending: false,
      cancelling: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePending = this.handlePending.bind(this)
  }



  handleSubmit(e) {
    // debugger
    e.preventDefault();
    this.setState({ sending: true })
    // const pending = document.getElementById(`pending-button${this.props.walk}`);
    // const paw = document.getElementById(`paw-button${this.props.walk}`);
    // pending.classList.toggle('hidden');
    // paw.classList.toggle('hidden')
    // debugger
    // this.props.receiveRoom(this.props.walk.user);
    // this.props.receiveRoom(this.props.requester);
    // let requestInfo = { action: 'sendRequest', value: { approvalRoom: this.props.walk.user, requster: this.props.requester } }
    // this.props.receiveEmit(requestInfo);

    // this.socket.emit('joinRoom', this.props.walk.user)
    // this.socket.emit('joinRoom', this.props.requester)
    // let requestInfo = { approvalRoom: this.props.walk.user, requster: this.props.requester}
    // this.socket.emit('sendRequest', requestInfo)
    // this.socket.on('success', (res) => console.log(res))
    this.props.paw(this.props.walk._id).then(
      this.setState({ sending: false })
    )
  }

  handlePending(e) {
    e.preventDefault();
    this.setState({ cancelling: true }) 
    // const pending = document.getElementById(`pending-button${this.props.walk}`);
    // const paw = document.getElementById(`paw-button${this.props.walk}`);
    // pending.classList.toggle('hidden');
    // paw.classList.toggle('hidden');
    this.props.deleteRequest(this.props.request._id).then(
      this.setState({ cancelling: false })
    )
  }

  render() {
    // if (!this.props.request) return null;
    if (!this.props) return null;
    return (
      <form>
        <input type="hidden" value={this.props.requester} />
        <input type="hidden" value={this.state.walk} />
        <button className={this.state.sending ? "small main button" : "hidden"}>Sending</button>
        <button className={this.state.cancelling ? "small main button" : "hidden"}>Canceling</button>
        <button active className={!this.state.sending ? this.props.request ? "hidden" : "small main button" : "hidden"}
          id={`paw-button${this.props.walk}`}
          onClick={this.handleSubmit}>
          Paw!
        </button>
        <button active className={!this.state.cancelling ? this.props.request ? "small main button" : "hidden" : "hidden" }
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