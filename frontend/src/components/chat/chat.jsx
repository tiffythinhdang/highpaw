import React from 'react';
import '../../stylesheets/chat.scss';
import iconArrow from '../../assets/small_icon_back_arrow_white.png';
import { withRouter } from 'react-router-dom';

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chat: [],
    };
    this.handleSend = this.handleSend.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  componentDidMount() {

    this.props.receiveRoom(this.props.match.params.requestId);

    this.props.fetchParticipants(this.props.match.params.requestId);

    this.props.fetchAllChats(this.props.match.params.requestId).then(response => {
      this.setState({
        chat: this.props.chats.map(chat => (
          <div className={chat.user.id === this.props.currentUser.id ? "me" : "other"} key={chat._id}>
            <img src={chat.user.profilePhotoUrl} alt="" />
            <p>{chat.content}</p>
          </div>
        ))
      });
    });

    let msgCallback = (message) => {
      this.setState({
        chat: this.state.chat.concat([
          <div className={message.user.id === this.props.currentUser.id ? "me" : "other"} key={this.state.chat.length}>
            <img src={message.user.profilePhotoUrl} alt="" />
            <p>{message.content}</p>
          </div>
        ])
      })
    };

    let messageListener = { action: 'sendMessage', callback: msgCallback }

    this.props.receiveListener(messageListener)

  }

  componentWillUnmount() {
    console.log('chat has unmounted');
    this.props.receiveLeaveRoom(this.props.match.params.requestId)
  }

  handleSend(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input')
    let messageInfo = {
      room: this.props.match.params.requestId,
      user: this.props.currentUser,
      content: input.value,
    };
    input.value = "";

    let messageEmission = { action: 'sendMessage', value: messageInfo }
    this.props.receiveEmit(messageEmission);
  }

  /* Tiffany's code starts*/
  handleGoBack(e) {
    e.preventDefault();
    this.props.history.goBack();
  }
  /* Tiffany's code ends*/

  render() {

    let title = "";
    if (this.props.users.length === 2) {
      title = this.props.users[0]._id === this.props.currentUser.id ? this.props.users[1].name : this.props.users[0].name
    }
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
          <p className="chat-header requester-name">{title}</p>
        </div>
        {/* Tiffany's code ends*/}

        <div id="chat-output">
          {this.state.chat}
        </div>

        <form className="chat-type-box container">

          <input type="text" id="chat-input" placeholder="Message" />
          <button className="small main button" onClick={this.handleSend}>Send</button>

        </form>
      </div>
    )
  }
}

export default withRouter(Chat);