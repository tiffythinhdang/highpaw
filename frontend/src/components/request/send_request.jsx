import React from 'react';
import '../../stylesheets/index.scss';

export default class SendRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walk: this.props.walk
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.paw(this.state.walk)
  }

  render() {
    return (
      <form>
        <input type="hidden" value={this.state.requester}/>
        <input type="hidden" value={this.state.walk}/>
        <button className="small main button" onClick={this.handleSubmit}>Paw!</button>
      </form>
    )
  }
}