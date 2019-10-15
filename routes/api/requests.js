const express = require('express');
const router = express.Router();
const passport = require('passport');
const Request = require('../../models/Request');
const Chat = require('../../models/Chat');
const Walk = require('../../models/Walk');
const User = require('../../models/User');
const validateChatInput = require('../../validation/chats');
const validateRequestStatus = require('../../validation/requests');

// Get Individual Request
router.get('/:id',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Request.findById(req.params.id).then(request => res.json(request))
  });


//Makes a request to pet dog
router.post('/walks/:walkId',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

    const newRequest = new Request({
      requester: req.user._id,
      walk: req.params.walkId,
    })

    newRequest.save()
      .then(request => res.json(request))
      .catch(err => res.status(400).json(err))
  })

//Gets all the request associated with a walk
router.get('/walks/:walkId',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Request
      .find({ walk: req.params.walkId })
      .then(requests => res.json(requests))
  })

//Gets all the approved requests associated with a walk
router.get('/walks/approved/:walkId',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
  
    Request
      .find({ walk: req.params.walkId, status: "approved" })
      .then( requests => {
        // let approved = [];
        // requests.forEach(request => {
        //   if (request.stauts === "approved") {
        //     approved.push(request)
        //     console.log(request)
        //   }
        // })
        res.json(requests);
      })
   
})

//Modifies the status of existing request
router.patch("/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

    const { errors, isValid } = validateRequestStatus(req.body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    Request.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true },
      (err, request) => {
        if (err) return res.status(400).json(err);
        return res.json(request)
      }
    )
  })

router.get('/users/:userId',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const requests = Request.find({ requster: req.user._id })
    const request = requests.filter((request) => request.status === "approved")
    res.json(request)
  })

router.delete('/:id',
  (req, res) => {
    Chat.deleteMany({ request: req.params.id }, err => {
      // Error handler
    }).then(
      Request.findByIdAndDelete(req.params.id,

        err => {
          if (err) {
            res.status(422).send({ error: err });
          }
          res.status(200).json({ message: 'Request Deleted!' })
        })
    );
  }
)

//Makes a chat
router.post('/:requestId/chat',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

    const { errors, isValid } = validateChatInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors)
    }

    const newChat = new Chat({
      user: {
        _id: req.user._id,
        name: req.user.name
      },
      request: req.params.requestId,
      message: req.body.message
    });

    newChat.save()
      .then(chat => res.json(chat))
      .catch(err => res.status(400).json(err))
  });

//Gets the chat for each request
router.get('/:requestId/chat',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Chat
      .find({ request: req.params.requestId })
      .then(chats => res.json(chats))
  });

//Gets Participants for the chat
router.get('/:requestId/chat/users',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let response = [];
    Request.findById(req.params.requestId).then(request => {
      User.findById(request.requester).then(userOne => {
        response.push(userOne);
        Walk.findById(request.walk).then(walk => {
          User.findById(walk.user).then(userTwo => {
            response.push(userTwo);
            res.json(response)
          })
        })
      })
    })
  });

module.exports = router;