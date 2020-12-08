const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Product = require("../models/product.model");
const Review = require("../models/review.model");

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin
} = require("../helpers/middlewares");

// GET '/' Get all products
router.get('/products',  (req, res, next) => {
console.log("Product list");
    Product.find()
      .populate("review")
      .then( (productList) => {
          res.json(productList)
      })
      .catch( (err) => {
        next( createError(err) );
      });
  
  
  })

  // GET '/:productId' Get all products
router.get('/products/:productId',  (req, res, next) => {
  console.log("Product detail");
    const productId= req.params.productId
    Product.findById(productId)
      .populate("review")
      .then( (productFound) => {
          res.json(productFound)
      })
      .catch( (err) => {
        next( createError(err) );
      });
  
  
  })
  
module.exports = router;
