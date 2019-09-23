const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Dog = require('../../models/Dog');
const validateDogInput = require('../../validation/dogs');

// router.get('/', (req, res) => {
//   Tweet.find()
//     .sort({ date: -1 })
//     .then(tweets => res.json(tweets))
//     .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
// });

router.get('/user/:user_id', (req, res) => {
  Dog.find({ owner: req.params.user_id })
    .then(dogs => res.json(dogs))
    .catch(err =>
      res.status(404).json({ notweetsfound: 'No dog found from that user' }
      )
    );
});

router.get('/:id', (req, res) => {
  Dog.findById(req.params.id)
    .then(dog => res.json(dog))
    .catch(err =>
      res.status(404).json({ notweetfound: 'No dog found with that ID' })
    );
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDogInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newDog = new Dog({
      name: req.body.name,
      age: req.body.age,
      breed: req.body.breed,
      owner: req.user.id
    });

    newDog.save().then(dog => res.json(dog));
  }
);

module.exports = router