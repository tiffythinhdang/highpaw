<!-- README - make sure it has:
Description of project, including goals
Link to live demo and/or instructions on how to use and run code
List of techs/languages/plugins/APIs used (MERN and any other tech)
Technical implementation details for anything worth mentioning (basically anything you had to stop and think about before building)
Include links to the neatest parts of the code, or embed snippets
Include screenshots of anything that looks pretty
To-dos and future features -->

<!-- Banner -->
<a href="#">
  <img 
    src="https://i.imgur.com/NHEr1B3.png"
    alt="highpaw logo" 
    align="right" height="40"
  />
</a>

highpaw
======================

### Description
- highpaw is a web application that allows users to meet and pet dogs in their area.

### Technologies
- MERN - MongoDB, Express, React, Node
- Socket.io
- Google Map Api

### Link
* [Web site]()
* [Documentation]()

### Functionality / MVPs
- [ ] User Authentication
- [ ] User Profile Page
- [ ] Search for surrounding active walks
- [ ] Live tracking of users' current location
- [ ] Sending / Accepting / Rejecting requests to pet a dog
- [ ] Live chat between users

### Group Members & Work Breakdown
- Aaron: User Feature
- Tiffany: Dog Feature
- Brian: Walk Feature
- Jason: Request Feature


### Code Snippets


```js 
sendLocation(rooms) {
    if (navigator.geolocation) {
      this.locationInterval = setInterval(() => {
        rooms.forEach(room => {
          navigator.geolocation.getCurrentPosition((position) => {
            let latLng = { lat: position.coords.latitude, lng: position.coords.longitude }
            let data = { currentUser: this.props.currentUser, latLng, room }
            let locationEmit = { action: 'sendLocation', value: data }
            this.props.receiveEmit(locationEmit)
          })
        })
      }, 4000)
    }
  }
  ```
Using HTML Geolocation, we are getting the current position of the User every four seconds and then sending that position along with the User's information to our server and into a room via Socket.io. When that server receives that emit, We send that information back to the client side in the map, and make a marker if there isn't current one, and update its location if it there already is one associated with the User to allow for a constant update of a User's location.


```js
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
```

We place all the information we need in a chat message, such as the room we need to send it to, the user sending the message, and the actual message is an Object. Then we send that Object to the server and back to the client side via Socket.io. We then use the information that sent to construct a chat message inside our chat room, so Users can have real-time chat.





