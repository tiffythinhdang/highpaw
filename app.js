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

// AWS
const aws = require('aws-sdk');
const S3_BUCKET = process.env.S3_BUCKET;
aws.config.region = 'us-west-1';

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// AWS
app.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    // console.log(process.env)
    // console.log(JSON.stringify(returnData));
    res.end();
  });
});



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
   
server.listen( 10001, () => {
  console.log(`Server is listening on localhost: ${10001}`)
})
