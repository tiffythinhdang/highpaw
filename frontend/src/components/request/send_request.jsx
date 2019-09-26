import React from 'react';
import '../../stylesheets/index.scss';

export default class SendRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walk: this.props.walk,
      requester: this.props.requester
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const pending = document.getElementById(`pending-button${this.props.walk}`);
    const paw = document.getElementById(`paw-button${this.props.walk}`);
    pending.classList.remove('hidden');
    paw.classList.add('hidden');
    this.props.paw(this.state.walk)
  }

  render() {
    return (
      <form>
        <input type="hidden" value={this.props.requester}/>
        <input type="hidden" value={this.state.walk}/>
        <button className="small main button" id={`paw-button${this.props.walk}`} onClick={this.handleSubmit}>Paw!</button>
        <button disabled className="hidden" id={`pending-button${this.props.walk}`}>Pending</button>
      </form>
    )
  }
}

/*
In walk index where you search, a walk index item will import the container of this. I'm getting the requester from the current user in state, and the component will need the walk._id from your walk index item with name walk
*/