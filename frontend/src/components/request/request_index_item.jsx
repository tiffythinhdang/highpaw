import React from 'react';
import {Link} from 'react-router-dom';

export default class RequestIndexItem extends React.Component {

  componentDidMount() {
    this.props.fetchDogFromRequest(this.props.requestId);
  }

  handleDelete(e) {
    e.preventDefault()
    this.props.delete(this.props.requestId)
  }

  render() {
    let dog = this.props.dog[this.props.idx]
    
    if (!dog) return null;
    return (
      <div className="request-index-item-container">
        <div className="request-index-item">
          <div className="profile-photo container">
            <img src={dog.profilePhotoUrl} alt=""/>
          </div>
          <div>
            <p className="request-dog-name">{dog.name}</p>           
            <p className="request-status">Status: {this.props.status}</p>
          </div>
        </div>
        {this.props.status === 'approved' ? 
          <Link to={`/requests/${this.props.requestId}`}>
            <button className="small main button">Location</button> 
          </Link>
        : <button onClick={this.handleDelete.bind(this)} className="small tertiary button">Cancel</button>}
      </div>
    )
  }

}