const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user.model");

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin,
} = require("../helpers/middlewares");

// POST '/auth/signup'
router.post("/signup", isNotLoggedIn, validationLogin, (req, res, next) => {
  const {
    firstName,
    lastName,
    address,
    country,
    CP,
    city,
    state,
    phoneNumber,
    gender,
    birthDateDay,
    birthDateMonth,
    birthDateYear,
    email,
    password,
  } = req.body;
  console.log("SIGNING UP FROM AUTH.ROUTER");
  User.findOne({ email })
    .then((foundUser) => {
      console.log("foundUser :>> ", foundUser);
      if (foundUser) {
        // If email is already taken, then return error response

        return next(createError(400)); // Bad Request
      } else {
        // If email is available, go and create a new user
        const salt = bcrypt.genSaltSync(saltRounds);
        const encryptedPassword = bcrypt.hashSync(password, salt);

        User.create({
          email,
          password: encryptedPassword,
          firstName,
          lastName,
          address,
          country,
          CP,
          city,
          state,
          phoneNumber,
          gender,
          birthDateDay,
          birthDateMonth,
          birthDateYear,
        })
          .then((createdUser) => {
            // set the `req.session.currentUser` using newly created user object, to trigger creation of the session and cookie
            createdUser.password = "*";
            req.session.currentUser = createdUser; // automatically logs in the user by setting the session/cookie

            res
              .status(201) // Created
              .json(createdUser); // res.send()
          })
          .catch((err) => {
            next(createError(err)); //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
          });
      }
    })
    .catch((err) => {
      next(createError(err));
    });
});

// POST '/auth/login'
router.post("/login", isNotLoggedIn, validationLogin, (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        // If user with that email can't be found, respond with an error
        return next(createError(404)); // Not Found
      }

      const passwordIsValid = bcrypt.compareSync(password, user.password); //  true/false

      if (passwordIsValid) {
        // set the `req.session.currentUser`, to trigger creation of the session
        user.password = "*";
        req.session.currentUser = user;

        res.status(200).json(user);
      } else {
        next(createError(401)); // Unathorized
      }
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/auth/logout'
router.get("/logout", isLoggedIn, (req, res, next) => {
  req.session.destroy(function (err) {
    if (err) {
      return next(err);
    }

    res
      .status(204) //  No Content
      .send();
  });
});

// GET '/auth/me'
router.get("/me", isLoggedIn, (req, res, next) => {
  const currentUserSessionData = req.session.currentUser;

  res.status(200).json(currentUserSessionData);
});

// GET '/auth/cart'
router.get("/cart", isLoggedIn, (req, res, next) => {
  const currentUserSessionData = req.session.currentUser.basket;
  console.log("currentUserSessionData :>> ", currentUserSessionData);
  res.status(200).json(currentUserSessionData);
});

// GET '/auth/cart'
router.post("/cart", isLoggedIn, (req, res, next) => {
  const { cart } = req.body;
  console.log("cart from route :>> ", cart);
  const currentUserSessionData = req.session.currentUser._id;
  User.findByIdAndUpdate(currentUserSessionData, { basket: cart });
  console.log("currentUserSessionData :>> ", currentUserSessionData);
  res.status(200).json(currentUserSessionData);
});

module.exports = router;
