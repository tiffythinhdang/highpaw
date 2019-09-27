import React from 'react';
const io = require('socket.io-client');

let socketURL;

if (process.env.NODE_ENV === "production") {
  console.log(`process.env: ${process.env}`);
  socketURL =
    process.env.REACT_APP_SOCKET_URL || "https://starfight.herokuapp.com/";
}

export default class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.handleSend = this.handleSend.bind(this);
  }

  componentDidMount() {

    this.chat = io(socketURL);

    this.chat.emit('joinRoom', 'chattest')

    this.chat.on('success', (res) => console.log(res))

    this.chat.on('sendMessage', (message) => {
      const output = document.getElementById('chat-output');
      const bTag = document.createElement('br');
      output.append(message);
      output.append(bTag);
    })

  }

  componentDidUpdate() {
    
  }

  handleSend(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input')
    const msg = document.createElement('p');
    const str = document.createElement('strong');
    const name = this.props.currentUserName
    str.innerText += `${name}:  `;
    msg.append(str)
    msg.innerText += input.value
    input.value = "";
    this.chat.emit('sendMessage', msg.innerText)
  }

  render() {
    return (
      <div className="chat-container">
        <div id="chat-output">
          
        </div>
        <form>

          <input type="text" id="chat-input" placeholder="Message"/>
          <button className="small main button" onClick={this.handleSend}>Send</button>

        </form>
      </div>
    )
  }
}