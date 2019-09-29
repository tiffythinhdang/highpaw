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
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  componentDidMount() {

  
    
    // debugger
    // this.chat = this.props.socket;

    this.props.receiveRoom(`${this.props.currentUser.id}`)

    // this.chat.emit('joinRoom', `${this.props.currentUser.id}`)

    // this.chat.on('success', (res) => console.log(res))

    let msgCallback = (message) => {
      const senderName = document.querySelector('.requester-name')
      // debugger
      if (message.user.id !== this.props.currentUser.id) {
        senderName.innerHTML = message.user.name
      }
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

  /* Tiffany's code starts*/
  handleGoBack(e) {
    e.preventDefault();
    this.props.history.goBack();
  }
  /* Tiffany's code ends*/

  render() {
    return (
      <div className="chat-container">

        {/* Tiffany's code starts*/}
        <div className="chat-header container">
          <img
            className="small icon"
            src={iconArrow}
            alt="back-arrow"
            onClick={this.handleGoBack}
          />
          <p className="chat-header requester-name"></p>
        </div>
        {/* Tiffany's code ends*/}

        <div id="chat-output">
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