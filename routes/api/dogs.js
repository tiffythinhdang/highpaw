const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Dog = require('../../models/Dog');
const validateDogInput = require('../../validation/dogs');

// Gets all dogs that belongs to a walk
router.get('/walks/:walkid', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
  let dog_ids = req.params.dog_id;
  let dogs = dog_ids.map(id => Dog.findbyId(id));
  return dogs
    .then(dogs => res.json(dogs))
    .catch(err => res.status(404).json({ nodogfound: 'No dog found' }));
});

// Get all dogs that belong to a user
router.get('/user/:user_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
  Dog.find({ owner: req.params.user_id })
    .then(dogs => res.json(dogs))
    .catch(err =>
      res.status(404).json({ nodogfound: 'No dog found from that user' }
      )
    );
});

// Show a dog
router.get('/:id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
  Dog.findById(req.params.id)
    .then(dog => res.json(dog))
    .catch(err =>
      res.status(404).json({ notweetfound: 'No dog found' })
    );
});

// Submit a dog
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
      gender: req.body.gender,
      owner: req.user.id
    });

    newDog.save().then(dog => res.json(dog));
  }
);

// Delete a dog
router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    let dog = Dog.find({
      id: req.params.id,
      owner: req.user.id
    });
    if (!dog) return res.status(400).json("Invalid request")
    
    dog.remove()
      .then(dog => res.json(dog))
      .catch(err =>
        res.status(404).json({ notweetfound: 'Invalid Request' })
      );
    }
);

module.exports = router