import React from 'react';
import '../../stylesheets/modal.scss'

export default class RequestSentModal extends React.Component {

  handleClose(e) {
    e.preventDefault();
    this.props.closeModal()
  }

  render() {
    return (
      <div className="request-sent-modal-container">
        <p>Your request has been sent!</p>
        <button className="medium secondary button" onClick={this.handleClose.bind(this)} >Okay Got It!</button>
      </div>
    )
  }
}