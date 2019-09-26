import React from 'react';

import '../../stylesheets/index.scss';
import '../../stylesheets/dog_show.scss';
import displayAge from '../../util/display_age_util';

class DogShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
  }

  componentDidMount(){
    this.props.fetchADog(this.props.match.params.id)
  }
  
  handleSubmitRequest(e) {
    e.preventDefault();
    
  }

  render() {
    if (!this.props.dog) return null;
    return (
      <div className="dog-show container">
        <h1 className="form main header">about me</h1>
        <div className="dog-show main-infor container">
          <div className="dog-show header-container">

            <div className="dog-show header infor">
              <div className="profile-img container">
                <img 
                  src="https://www.thesprucepets.com/thmb/KEkwV1YeL3obCMo0YSPDXTCxjRA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/19933184_104417643500613_5541725731421159424_n-5ba0548546e0fb0050edecc0.jpg"
                  alt="dog-pic"
                  className="profile-img"
                />
              </div>
              <div className="dog-show name-age">
                <p className="dog-name">{this.props.dog.name}</p>
                <p className="dog-age">{displayAge(this.props.dog.age)}</p>
              </div>
            </div>

            <button className="small main button paw">Paw!</button>
          </div>

        
          <div className="dog-show bgo-infor-container">
            <div className="dog-show bgo-infor">
              <div className="dog-show field-name">
                <p>Breed</p>
                <p>Gender</p>
                <p>Owner</p>
              </div>
              <div className="dog-show field-input">
                <p>{this.props.dog.breed}</p>
                <p>{this.props.dog.gender}</p>
                <p>{this.props.dog.owner.name}</p>
              </div>
            </div>
          </div>

          <div className="dog-show pictures">
            <img 
              src="https://www.thesprucepets.com/thmb/KEkwV1YeL3obCMo0YSPDXTCxjRA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/19933184_104417643500613_5541725731421159424_n-5ba0548546e0fb0050edecc0.jpg"
              alt="dog-pic"
              className="dog-show pic"
              />
            <img 
              src="https://www.thesprucepets.com/thmb/KEkwV1YeL3obCMo0YSPDXTCxjRA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/19933184_104417643500613_5541725731421159424_n-5ba0548546e0fb0050edecc0.jpg"
              alt="dog-pic"
              className="dog-show pic"
              />
            <img 
              src="https://www.thesprucepets.com/thmb/KEkwV1YeL3obCMo0YSPDXTCxjRA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/19933184_104417643500613_5541725731421159424_n-5ba0548546e0fb0050edecc0.jpg"
              alt="dog-pic"
              className="dog-show pic"
              />
            <img 
              src="https://www.thesprucepets.com/thmb/KEkwV1YeL3obCMo0YSPDXTCxjRA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/19933184_104417643500613_5541725731421159424_n-5ba0548546e0fb0050edecc0.jpg"
              alt="dog-pic"
              className="dog-show pic"
              />
          </div>

          <button className="medium tertiary button">Back</button>
        </div>
      </div>
    );
  }
}

export default DogShow;