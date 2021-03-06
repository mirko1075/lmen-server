const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const Review = require("../models/review.model");
const ReviewsRelational = require("../models/reviewsRelational.model");

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin,
} = require("../helpers/middlewares");

// GET '/products' Get all products
router.get("/basket", (req, res, next) => {
  console.log("Getting shopping cart");
  const userId = req.session.currentUser._id;
  User.findById(userId)
    .populate("basket")
    .then((basket) => {
      res.json(basket);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// // GET '/products/:productId' Get all products
// router.get("/products/:productId", (req, res, next) => {
//   console.log("Product detail");
//   const productId = req.params.productId;
//   Product.findById(productId)
//     // .populate("review")
//     .populate({
//       path: "review",
//       populate: {
//         path: "reviewUser",
//       },
//     })
//     .then((productFound) => {
//       console.log("productFound :>> ", productFound);
//       res.json(productFound);
//     })
//     .catch((err) => {
//       next(createError(err));
//     });
// });

// // GET '/:productId' Get all products
// router.get("/cart", (req, res, next) => {
//   console.log("/cart get");
//   const userId = req.session.currentUser._id;
//   User.findById(userId)
//     .populate("basket")
//     .then((userFound) => {
//       res.json(userFound);
//     })
//     .catch((err) => {
//       next(createError(err));
//     });
// });
// // post '/cart' Update cart
// router.post("/cart", (req, res, next) => {
//   const userId = req.session.currentUser._id;
//   const basket = req.body;
//   User.findByIdAndUpdate({ _id: userId }, { basket: basket })
//     .then((userFound) => {
//       res.json(userFound);
//     })
//     .catch((err) => {
//       next(createError(err));
//     });
// });

// // COMMENTED BECAUSE I CREATED A RELATIONAL COLLECTION
// // // POST  product/:productId/reviews / Create product reviews
// // router.post("/product/:productId/reviews", (req, res, next) => {
// //   console.log("reviews post");
// //   const userId = req.session.currentUser._id;
// //   const { title, description, rate, reviewUser, reviewProduct } = req.body;
// //   let reviewsUser = [];
// //   let reviewId = null;
// //   // CREATING REVIEW
// //   Review.create({ title, description, rate, reviewUser, reviewProduct })
// //     .then((reviewCreated) => {
// //       const pr = User.findById(userId);
// //       reviewId = reviewCreated._id;
// //       reviewsUser.push(reviewId);
// //       return pr;
// //     })
// //     .then((userFound) => {
// //       let reviewsUserArr = [...reviewsUser];
// //       for (let index = 0; index < userFound.reviews.length; index++) {
// //         reviewsUserArr.push(userFound.reviews[index]._id);
// //       }
// //       // POPULATING USER WITH THE REVIEW ID
// //       const pr = User.findByIdAndUpdate(
// //         { _id: userId },
// //         { reviews: reviewsUserArr }
// //       );
// //       return pr;
// //     })
// //     .then((userModified) => {
// //       //RETRIVING PRODUCT REVIEWS
// //       const pr = Product.findById(reviewProduct);
// //       return pr;
// //     })
// //     .then((productFound) => {
// //       let productreviewArr = productFound.review;
// //       productreviewArr.push(reviewId);

// //       //UPDATING PRODUCT REVIEWS
// //       const pr = User.findByIdAndUpdate(
// //         { _id: productFound._id },
// //         { reviews: productreviewArr }
// //       );
// //       return pr;
// //     })
// //     .then((productModified) => {
// //       res.json(productModified);
// //     })
// //     .catch((err) => {
// //       next(createError(err));
// //     });
// // });

// // POST  product/:productId/reviews / Create product reviews
// router.post("/product/:productId/reviews", (req, res, next) => {
//   console.log("reviews create post");
//   const userId = req.session.currentUser._id;
//   const { title, description, rate, reviewUser, reviewProduct } = req.body;
//   let productId = reviewProduct;
//   let review = null;
//   let reviewId = null;
//   // CREATING REVIEW
//   Review.create({ title, description, rate, reviewUser, reviewProduct })
//     .then((reviewCreated) => {
//       review = reviewCreated;
//       reviewId = reviewCreated._id;
//       console.log("reviewId :>> ", reviewId);
//       const pr = ReviewsRelational.create({ userId, reviewId, productId });
//       return pr;
//     })
//     .then((ReviewsRelationalCreated) => {
//       const pr = Product.findById(reviewProduct);
//       return pr;
//     })
//     .then((productFound) => {
//       console.log("ProductFound :>> ", productFound);
//       let productreviewArr = productFound.review;
//       productreviewArr.push(reviewId);

//       //UPDATING PRODUCT REVIEWS
//       const pr = Product.findByIdAndUpdate(
//         { _id: productId },
//         { review: productreviewArr }
//       );
//       return pr;
//     })
//     .then((productModified) => {
//       res.json(review);
//     })
//     .catch((err) => {
//       next(createError(err));
//     });
// });

// //`/api/product/:productId/reviews`
// router.get("/product/:productId/review/:reviewId", (req, res, next) => {
//   const productId = req.params.productId;
//   const reviewId = req.params.reviewId;
//   let review = null;
//   Review.findByIdAndRemove(reviewId)
//     .then((reviewRemoved) => {
//       review = reviewRemoved;
//       const pr = Product.findById(productId);
//       return pr;
//     })
//     .then((productFound) => {
//       let reviewsProductArr = productFound.review;
//       console.log("reviewsProductArr :>> ", reviewsProductArr);
//       for (let index = 0; index < reviewsProductArr.length; index++) {
//         console.log("reviewsProductArr[index] :>> ", reviewsProductArr[index]);
//         if (reviewsProductArr[index] == reviewId) {
//           reviewsProductArr.splice(index, 1);
//         }
//       }
//       const pr = Product.findByIdAndUpdate(
//         { _id: productId },
//         { review: reviewsProductArr }
//       );
//       return pr;
//     })
//     .then((productModified) => {
//       const pr = ReviewsRelational.deleteOne({ reviewId });
//       return pr;
//     })
//     .then((userModified) => {
//       res.json(review);
//     })
//     .catch((err) => {
//       next(createError(err));
//     });
// });

module.exports = router;
