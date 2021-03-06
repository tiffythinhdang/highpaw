const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Dog = require('../../models/Dog');
const validateDogInput = require('../../validation/dogs');
const Walk = require('../../models/Walk');
const Request = require('../../models/Request');

// Gets all dogs that belongs to a walk
router.get('/walks/:walkId', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
  // let dog_ids = req.params.dog_id;
  // let dogs = dog_ids.map(id => Dog.findbyId(id));
  // console.log(req.params)
  let walk = Walk.findById(req.params.walkId).then(walk => { 
    // console.log(walk.dogs)
    // let dogs = [];
    // walk.dogs.map(dog => Dog.findById(dog.id).then(dog => console.log(dog))
    // );
    Dog.find({ _id: { $in: walk.dogs }}).then(dogs => {
      // console.log(dogs)
      res.json(dogs)
    })
    // return dogs
      // .then(dogs => res.json(dogs))
      // .catch(err => res.status(404).json({ nodogfound: 'No dog found' }));

  })
});

// console.log(req.params)
// Walk.findById(req.params.walkId).then(walk => {
//   console.log(walk)
//   walk.dogs.map(id => Dog.findById(id).then(dogs => {
//     console.log('hihi' + dogs)
//     return dogs
//       .then(dogs => res.json(dogs))
//       .catch(err => res.status(404).json({ nodogfound: 'No dog found' }));

//   }));
// })


// Get all dogs that belong to a user
router.get('/user/:user_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // console.log(req.params)
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
  Dog.findById(req.params.id).populate("owner")
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
      owner: req.user.id,
      profilePhotoUrl: req.body.profilePhotoUrl
    });

    newDog.save().then(dog => res.json(dog));
  }
);

// Update a dog
router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDogInput(req.body);
    
    if (!isValid) {
      return res.status(400).json(errors);
    }

    Dog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, dog) => {
        if (err) return res.status(400).json(err);
        return res.json(dog)
      }
    )
  }
);

// Delete a dog
router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Dog.findById(req.params.id)
      .then(dog => {
        dog.remove()
          .then(dog => res.json(dog))
          .catch(err =>
            res.status(404).json({ notweetfound: 'Invalid Request' })
          );
      })
      .catch(err =>
        res.status(404).json({ notweetfound: 'No dog found' })
      );
    }
);

//fetch dog from request
router.get('/requests/:requestId',
    (req, res) => {
      Request.findById(req.params.requestId)
      .then(request => {
        Walk.findOne({_id: request.walk})
        .then(walk => {
          Dog.findOne({_id: walk.dogs[0]})
          .then(dog => res.json(dog))
        })
      })
      
    }
)

module.exports = router;