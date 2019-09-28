import React from 'react';
import '../../stylesheets/chat.scss';
import iconArrow from '../../assets/small_icon_back_arrow_white.png';

const io = require('socket.io-client');


export default class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chat: [],
    }
    this.handleSend = this.handleSend.bind(this);
  }

  componentDidMount() {

  
    
    // debugger
    // this.chat = this.props.socket;

    this.props.receiveRoom(`${this.props.currentUser.id}`)

    // this.chat.emit('joinRoom', `${this.props.currentUser.id}`)

    // this.chat.on('success', (res) => console.log(res))

    let msgCallback = (message) => {
      this.setState({
        chat: this.state.chat.concat([
          <div className={message.user.id === this.props.currentUser.id ? "me" : "other"} key={this.state.chat.length}>
            <img src={message.user.profilePhotoUrl} alt="" />
            <p>{message.content}</p>
          </div>
        ])
      })
    }

    let messageListener = { action: 'sendMessage', callback: msgCallback  }

    this.props.receiveListener(messageListener)

    // this.chat.on('sendMessage', (message) => {
    //   this.setState({
    //     chat: this.state.chat.concat([
    //       <div className={message.user.id === this.props.currentUser.id ? "me" : "other"} key={this.state.chat.length}>
    //         <img src={message.user.profilePhotoUrl} alt=""/>
    //         <p>{message.content}</p>
    //       </div>
    //     ])
    //   })
    // })

  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {
    console.log('chat has unmounted')
    this.props.receiveLeaveRoom(this.props.currentUser.id)
  }

  handleSend(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input')
    const msg = document.createElement('p');
    msg.innerText += input.value
    let messageInfo = { 
      user: this.props.currentUser,
      content: msg.innerText, 
    }
    input.value = "";

    let messageEmission = { action: 'sendMessage', value: messageInfo }
    this.props.receiveEmit(messageEmission);

    // this.chat.emit('sendMessage', messageInfo)
  }

  render() {
    return (
      <div className="chat-container">
        {/* Tiffany's code starts*/}
        <div className="chat-header container">
          <img
            className="small icon"
            src={iconArrow}
            alt="back-arrow"
            onCLick={this.handleGoBack}
          />
          <p className="chat-header requester-name">Requester's name</p>
        </div>
        {/* Tiffany's code ends*/}

        <div id="chat-output">
          <div className="other">
            <img 
              src="https://res.cloudinary.com/teepublic/image/private/s--xtk3UD3P--/t_Preview/b_rgb:c8e0ec,c_limit,f_auto,h_313,q_90,w_313/v1523947371/production/designs/2598025_0"
            />
            <p>yrggjsdjghfjdsghjsdhgjksdhfgjkdshgjkdhsgkjhdgkjdhsgdsh</p>
          </div>
          {this.state.chat}
        </div>
        <form className="chat-type-box container">

          <input type="text" id="chat-input" placeholder="Message"/>
          <button className="small main button" onClick={this.handleSend}>Send</button>

        </form>
      </div>
    )
  }
}