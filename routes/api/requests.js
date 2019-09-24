const express = require('express');
const router = express.Router();
const passport = require('passport');
const Request = require('../../models/Request');
const validateRequestStatus = require('../../validation/requests');

//Makes a request to pet dog
router.post('/walks/:walkId', 
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {

    // const { errors, isValid } = validateRequestInput(req.body)

    // if (!isValid) {
    //   return res.status(400).json(errors)
    // }

    const newRequest = new Request({
      requester: req.body.userId,
      walk: req.params.walkId,
    })

    newRequest.save()
      .then(request => res.json(request))
      .catch(err => res.status(400).json(err))
})

//Gets all the request associated with a walk
router.get('/walks/:walkId', 
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Request
      .find({ walk: req.params.walkId })
      .then(requests => res.json(requests))
})

//Modifies the status of existing request
router.patch("/:id", 
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    
    const { errors, isValid } = validateRequestStatus(req.body)

    if (!isValid) {
      return res.status(400).json(errors)
    } 
    

    // return res.send({msg: "hiii"})
    
    Request.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, request) => {
        if (err) return res.status(400).json(err);
        return res.json(request)
      }
     )
})


module.exports = router