import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/instruction.scss';

import instructionIMG1 from '../../assets/instructions/instruction_1.png';
import instructionIMG2 from '../../assets/instructions/instruction_2.png';
import instructionIMG3 from '../../assets/instructions/instruction_3.png';
import instructionIMG4 from '../../assets/instructions/instruction_4.png';
import instructionIMG5 from '../../assets/instructions/instruction_5.png';
import instructionIMG6 from '../../assets/instructions/instruction_6.png';
import instructionIMG7 from '../../assets/instructions/instruction_7.png';
import instructionIMG8 from '../../assets/instructions/instruction_8.png';

class InstructionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  displayLogInButton() {
    if (!this.props.currentUserId) {
      return(
        <div className="main-page button-container">
          <Link to={'/signup'}>
            <button className="main large button">Get Started!</button>
          </Link>
          <Link to={'/login'}>
            <button className="secondary large button">Log In</button>
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="instruction outer-container">
        <h1 className="form main header">How to&nbsp;<span className="inline-pink">Go Paw</span>?</h1>
        <div className="instruction container">
          <div className="instruction words">
            <p>Click <span className="inline-pink">Get Started</span> to sign up</p>
            <p>or <span className="inline-pink">Log In</span> if already signed up</p>
          </div>
          <div className="instruction img-container">
            <img src={instructionIMG1} alt="instruction-1" />
          </div>
        </div>

        <div className="instruction container">
          <div className="instruction words">
            <p>Fill out the form</p>
          </div>
          <div className="instruction img-container">
            <img src={instructionIMG2} alt="instruction-2" />
          </div>
        </div>

        <div className="instruction container">
          <div className="instruction words">
            <p>Edit your <span className="inline-pink">Profile</span> as needed</p>
          </div>
          <div className="instruction img-container">
            <img src={instructionIMG3} alt="instruction-3" />
          </div>
        </div>

        <div className="instruction container">
          <div className="instruction words">
            <p>Click <span className="inline-pink">Active Walks</span> from menu bar to see near-by dogs</p>
          </div>
          <div className="instruction img-container">
            <img src={instructionIMG4} alt="instruction-4" />
          </div>
        </div>

        <div className="instruction container">
          <div className="instruction words">
            <p><span className="inline-pink">Go Paw!</span> to send request to pet</p>
            <p><span className="inline-pink">Requests</span> to see the statuses</p>
          </div>
          <div className="instruction img-container">
            <img src={instructionIMG5} alt="instruction-5" />
          </div>
        </div>

        <div className="instruction container">
          <div className="instruction words">
            <p>Approved requests allow you to see the walkers’ locations</p>
          </div>
          <div className="instruction img-container">
            <img src={instructionIMG6} alt="instruction-6" />
          </div>
        </div>

        <div className="instruction container">
          <div className="instruction words">
            <p>Use the map to navigate</p>
            <p><span className="inline-pink">Chat</span> to message the walker</p>
          </div>
          <div className="instruction img-container">
            <img src={instructionIMG7} alt="instruction-7" />
          </div>
        </div>

        <div className="instruction container">
          <div className="instruction words">
            <p>Now let's <span className="inline-pink">Go Paw!</span> someone!</p>
          </div>
          <div className="instruction img-container">
            <img src={instructionIMG8} alt="icon-paw" />
          </div>
          {this.displayLogInButton()}
        </div>

      </div>
    );
  }
}

export default InstructionIndex;
