const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const Review = require("../models/review.model");

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin,
} = require("../helpers/middlewares");

// GET '/products' Get all products
router.get("/products", (req, res, next) => {
  console.log("Product list");
  Product.find()
    .populate("review")
    .then((productList) => {
      res.json(productList);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/products/:productId' Get all products
router.get("/products/:productId", (req, res, next) => {
  console.log("Product detail");
  const productId = req.params.productId;
  Product.findById(productId)
    .populate("review")
    .then((productFound) => {
      res.json(productFound);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/:productId' Get all products
router.get("/cart", (req, res, next) => {
  console.log("/cart get");
  const userId = req.session.currentUser._id;
  User.findById(userId)
    .populate("basket")
    .then((userFound) => {
      res.json(userFound);
    })
    .catch((err) => {
      next(createError(err));
    });
});
// post '/cart' Update cart
router.post("/cart", (req, res, next) => {
  const userId = req.session.currentUser._id;
  const basket = req.body;
  User.findByIdAndUpdate({ _id: userId }, { basket: basket })
    .then((userFound) => {
      res.json(userFound);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// POST  product/:productId/reviews / Create product reviews
router.post("/product/:productId/reviews", (req, res, next) => {
  console.log("reviews post");
  const userId = req.session.currentUser._id;
  const { title, description, rate, reviewUser, reviewProduct } = req.body;
  let reviewsUser = [];
  Review.create({ title, description, rate, reviewUser, reviewProduct })
    .then((reviewCreated) => {
      const pr = User.findById(userId);
      reviewsUser.push(reviewCreated._id);
      return pr;
    })
    .then((userFound) => {
      let reviewsUserArr = [...reviewsUser];
      for (let index = 0; index < userFound.reviews.length; index++) {
        reviewsUserArr.push(userFound.reviews[index]._id);
      }
      const pr = User.findByIdAndUpdate(
        { _id: userId },
        { reviews: reviewsUserArr }
      );
      return pr;
    })
    .then((userModified) => {
      res.json(userModified);
    })
    .catch((err) => {
      next(createError(err));
    });
});

module.exports = router;
