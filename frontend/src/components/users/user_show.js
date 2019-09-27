import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/index.scss';
import '../../stylesheets/user_show.scss';

class UserShow extends React.Component {x
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAUser(this.props.match.params.id);
    this.props.fetchDogsFromUser(this.props.match.params.id);
  }

  displayEditButton(){
    if (this.props.user._id === this.props.currentUserId) {
      return (
        <button
          className="tertiary small button">
          Edit
        </button>
      )
    }
  }

  getUserDogs(){
    let dogs = Object.values(this.props.dogs);
    let pageUserId = this.props.user._id;
    return dogs.filter(dog => dog.owner === pageUserId);
  }

  getDogsName(){
    return this.getUserDogs()
      .map(dog => dog.name)
      .join(", ");
  }

  displayDogs(){
    return this.getUserDogs().map(dog =>
      <Link to={`/dogs/${dog._id}`}
        className="user-show dog-container">
        <img
          key={dog._id}
          src={dog.profilePhotoUrl}
          alt="dog-pic"
        />
        <div className="user-show name-dog">
          <p>{dog.name}</p>
        </div>
      </Link>
    )
  }

  render() {
    if (!this.props.user) return null;
    return(
      <div className="user-show outer-container">
        <div className="user-show infor-container">
          <div className="user-show infor-header">
            <div className="header background">
              {this.displayEditButton()}
            </div>
            <div className="profile-photo container">
              <img
                src={this.props.user.profilePhotoUrl}
                alt="user-pic"
              />
            </div>
          </div>

          <div className="user-show nad-infor-container">
            <div className="user-show nad-infor">
              <div className="user-show name">
                <p className="field-name">Name</p>
                <p className="field-input">{this.props.user.name}</p>
              </div>

              <div className="user-show age">
                <p className="field-name">Age</p>
                <p className="field-input">{this.props.user.age}</p>
              </div>

              <div className="user-show dogs">
                <p className="field-name">Dogs</p>
                <p className="field-input">{this.getDogsName()}</p>
              </div>
            </div>
          </div>

          <div className="user-show dogs-container">
            { this.displayDogs() }
          </div>

        </div>
      
        <button
          onClick={this.handleGoBack}
          className="medium tertiary button"
        >Back
        </button>
      </div>
    )
  }
}

export default UserShow;