const express = require("express");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mongoose = require("mongoose");
const db = process.env.mongoURI ? process.env.mongoURI : require('./config/keys').mongoURI;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const passport = require('passport');
const users = require("./routes/api/users");
const dogs = require("./routes/api/dogs");
const requests = require('./routes/api/requests');
const walks = require('./routes/api/walks');

app.use(passport.initialize());
require('./config/passport')(passport);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// app.use("/", (req, res) => {
  // res.send("Hello World")
// })

// Api routes
app.use("/api/users", users);
app.use("/api/dogs", dogs);
app.use("/api/walks", walks);
app.use("/api/requests", requests);


//Websockets

io
  .of('/walks')
  .on('connection', (socket) => {
    console.log('New Client');
    socket.emit('welcome', 'Welcome to the walk namespace')

    // socket.on('sendMessage', message => {
    //   socket.emit('sendMessage', message)
    // })

    
    socket.on('joinRoom', (room) => {
      socket.join(room)
      return socket.emit('success', "You have successfully joined " + room)
    })
    socket.on('sendLocation', location => {
      io
        .of('/walks')
        .in('testing').emit('sendLocation', location) 
    })
    socket.on('sendMessage', message => {
      io
        .of('/walks')
        .in('chattest').emit('sendMessage', message)
    })
  })

// io.on('connection', socket => {
//   socket.on('sendMessage', message => {
//     io.emit('sendMessage', message)
//   })
// })
   
server.listen( port + 1, () => {
  console.log(`Server is listening on localhost: ${port + 1}`)
})
