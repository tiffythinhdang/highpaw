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
    e.preventDefault();
    this.setState({ sending: true })
    this.props.paw(this.props.walk._id).then(
      this.setState({ sending: false })
    ).then(
      this.props.openModal('requestSent')
    )
  }

  handlePending(e) {
    e.preventDefault();
    this.setState({ cancelling: true }) 
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
        <button active className={this.props.requested ? "hidden" : "small main button"}
          id={`paw-button${this.props.walk}`}
          onClick={this.handleSubmit}>
          Paw!
        </button>
        <button active className={this.props.requested ? "small pending button" : "hidden"}
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