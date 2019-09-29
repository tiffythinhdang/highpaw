const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = process.env.secretOrKey ? { secretOrKey: process.env.secretOrKey } : require('../../config/keys');
const passport = require('passport');
const User = require('../../models/User');
const Request = require('../../models/Request');

const validateRegisterInput = require('../../validation/users/register');
const validateLoginInput = require('../../validation/users/login');
const validateUpdateInput = require('../../validation/users/update');

// Register Route
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.name = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        gender: req.body.gender,
        profilePhotoUrl: req.body.profilePhotoUrl,
        // location: req.body.location
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, name: user.name };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// LogIn Route
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "This user does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name, profilePhotoUrl: user.profilePhotoUrl };
        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          if (err) {
            errors.email = err;
            return res.status(400).json(errors)
          }
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

// Update current user
router.patch("/:id", passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateUpdateInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  let filter = { _id: req.user._id};
  let update = req.body;
  // Object.keys(req.body).forEach(key => {
  //   if (req.body[key].length > 0) {
  //     update[key] = req.body[key];
  //   }
  // });

  User.findOneAndUpdate(filter, update, {new: true})
    .then(user => {
      let returnedUser = {
        _id: user._id,
        name: user.name,
        age: user.age,
        email: user.email,
        gender: user.gender,
        profilePhotoUrl: user.profilePhotoUrl
      }
      res.json(returnedUser)
    })
    .catch(err =>
      res.status(404).json({ notweetfound: 'No user found' })
  );
});

// Show a user
router.get("/:id", 
  passport.authenticate('jwt', 
  {session: false}), 
  (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        let returnedUser = {
          _id: user._id,
          name: user.name,
          age: user.age,
          email: user.email,
          gender: user.gender,
          profilePhotoUrl: user.profilePhotoUrl
        }
        res.json(returnedUser)
      })
      .catch(err =>
        res.status(404).json({ notweetfound: 'No user found' })
      );
});

router.get('/requests/:requestId', passport.authenticate('jwt', {session: false}),
  (req, res) => {
    // console.log(req)
    // // console.log(req.body)
    // Request.findOne({ requester: req.user._id}).then(requester => console.log(requester))
    // // console.log(requester + 'test2')
    // console.log(requester)
    // console.log(req.params.requestId)
    User.findOne({ _id: req.params.requestId }).then(user => {
      res.json(user)
    })
    // console.log(user + 'test')
})

module.exports = router;