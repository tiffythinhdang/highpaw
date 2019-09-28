const express = require('express');
const router = express.Router();
const passport = require('passport');
const Request = require('../../models/Request');
const validateRequestStatus = require('../../validation/requests');


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
    Request.findByIdAndDelete(req.params.id,

      (err) => {
        if (err) {
          res.status(422).send({ error: err });
        }
        res.status(200).json({ message: 'Request Deleted!' })
      })
  }
)

module.exports = router