const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Walk = require('../../models/Walk');
const Dog = require('../../models/Dog');
// const User = require('../../models/User');
const validateWalkInput = require('../../validation/walks');
const Request = require('../../models/Request');

// get all walks
router.get('/', (req, res) => {
  Walk.find()
    .sort({ date: -1 })
    .then(walks => res.json(walks))
    .catch(err => res.status(404).json({ nowalksfound: 'No walks found' }));
});


// get walk by id
router.get('/:id', (req, res) => {
  Walk.findById(req.params.id)
    .then(walk => res.json(walk))
    .catch(err => res.status(404).json({ nowalksfound: 'No walk found with that ID' }));
});

router.post('/create',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    // const { errors, isValid } = validateWalkInput(req.body);

    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }


    // const dogs = Dog.find({ owner: req.body.user }).then((dog) => {
    //   return res.json(dog)
    // })

    // Dog.find({ owner: { $in: req.user.id } }).then(dogsArr => {

      if (req.body.dogs.length < 1) {
        return res.status(404).json({ dog: 'Must walk at least one dog'})

      }

      console.log(req.body.dogs.length)
      console.log(res)
      const newWalk = new Walk({
        dogs: req.body.dogs, 
        // dogs: dogsArr,
        user: req.user.id,
        // user: req.body.user, // req.user.id 
        //
      });

      newWalk.save().then(walk => res.json(walk));

    // })
  }
);

router.delete('/:id',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    // Dog.deleteMany({ owner: { $in: req.params.id } }).then( // test bc no request model
    Request.deleteMany({ walk: { $in: req.params.id } }).then(
  
      Walk.findByIdAndDelete(req.params.id,
     

      (err) => {
        if (err) {
          res.status(422).send({ error: err });
        }
        res.status(200).json({ message: 'Walk deleted!' })
      })
    )
  })


module.exports = router