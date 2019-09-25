import React from 'react';

export default class FulfillRequest extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleFulfilled = this.handleFulfilled.bind(this);
  }

  handleFulfilled(e) {
    e.preventDefault();
    let fufillment = { _id: this.props.review._id, status: "fulfilled" }
    this.props.fulfill(fufillment)
  }

  render() {
    return (
      <form>
        <button onClick={this.handleFulfilled}>Pawed</button>
      </form>
    )
  }
}