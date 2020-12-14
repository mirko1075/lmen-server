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
router.get("/products", (req, res, next) => {
  console.log("Product list");
  Product.find()
    .populate({
      path: "review",
      populate: {
        path: "userId",
      },
    })
    .then((productList) => {
      res.status(200).json(productList);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/products' Get all products
router.post("/products", (req, res, next) => {
  const {
    image,
    name,
    description,
    dimension,
    category,
    technic,
    material,
    price,
    stock,
  } = req.body;
  console.log("Product list");
  Product.create({
    image,
    name,
    description,
    dimension,
    category,
    technic,
    material,
    price,
    stock,
  })

    .then((productList) => {
      res.status(200).json(productList);
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
    // .populate("review")
    .populate({
      path: "review",
      populate: {
        path: "reviewUser",
      },
    })
    .then((productFound) => {
      // console.log("productFound :>> ", productFound);
      res.status(200).json(productFound);
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
      res.status(200).json(userFound);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/products/categories'
router.get("/categories", (req, res, next) => {
  console.log("/categories GET");
  Product.find()
    .then((productsFound) => {
      const categoriesArr = [];
      productsFound.forEach((elem) => {
        // console.log("elem :>> ", elem);
        categoriesArr.push(elem.category);
      });
      const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
      };

      const response = { data: categoriesArr.filter(onlyUnique) };
      // console.log("response :>> ", response);
      res.status(200).json(response);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/products per categories' Get all products
router.get("/categories/:category", (req, res, next) => {
  console.log(" products per categoriesr GET");
  const category = req.params.category;
  Product.find({ category })
    .then((productList) => {
      // console.log("productList :>> ", productList);
      res.status(200).json(productList);
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
      res.status(200).json(userFound);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// COMMENTED BECAUSE I CREATED A RELATIONAL COLLECTION
// // POST  product/:productId/reviews / Create product reviews
// router.post("/product/:productId/reviews", (req, res, next) => {
//   console.log("reviews post");
//   const userId = req.session.currentUser._id;
//   const { title, description, rate, reviewUser, productId } = req.body;
//   let reviewsUser = [];
//   let reviewId = null;
//   // CREATING REVIEW
//   Review.create({ title, description, rate, reviewUser, productId })
//     .then((reviewCreated) => {
//       const pr = User.findById(userId);
//       reviewId = reviewCreated._id;
//       reviewsUser.push(reviewId);
//       return pr;
//     })
//     .then((userFound) => {
//       let reviewsUserArr = [...reviewsUser];
//       for (let index = 0; index < userFound.reviews.length; index++) {
//         reviewsUserArr.push(userFound.reviews[index]._id);
//       }
//       // POPULATING USER WITH THE REVIEW ID
//       const pr = User.findByIdAndUpdate(
//         { _id: userId },
//         { reviews: reviewsUserArr }
//       );
//       return pr;
//     })
//     .then((userModified) => {
//       //RETRIVING PRODUCT REVIEWS
//       const pr = Product.findById(productId);
//       return pr;
//     })
//     .then((productFound) => {
//       let productreviewArr = productFound.review;
//       productreviewArr.push(reviewId);

//       //UPDATING PRODUCT REVIEWS
//       const pr = User.findByIdAndUpdate(
//         { _id: productFound._id },
//         { reviews: productreviewArr }
//       );
//       return pr;
//     })
//     .then((productModified) => {
//       res.json(productModified);
//     })
//     .catch((err) => {
//       next(createError(err));
//     });
// });

// POST  product/:productId/reviews / Create product reviews
router.post("/product/:productId/reviews", (req, res, next) => {
  console.log("reviews create post");
  const userId = req.session.currentUser._id;
  const { title, message, rate, productId } = req.body;
  let review = null;
  let reviewId = null;
  // CREATING REVIEW
  Review.create({ title, message, rate, userId, productId })
    .then((reviewCreated) => {
      review = reviewCreated;
      reviewId = reviewCreated._id;
      console.log("reviewId :>> ", reviewId);
      const pr = ReviewsRelational.create({ userId, reviewId, productId });
      return pr;
    })
    .then((ReviewsRelationalCreated) => {
      const pr = Product.findById(productId);
      return pr;
    })
    .then((productFound) => {
      console.log("ProductFound :>> ", productFound);
      let productreviewArr = productFound.review;
      productreviewArr.push(reviewId);

      //UPDATING PRODUCT REVIEWS
      const pr = Product.findByIdAndUpdate(
        { _id: productId },
        { review: productreviewArr }
      );
      return pr;
    })
    .then((productModified) => {
      res.status(200).json(review);
    })
    .catch((err) => {
      next(createError(err));
    });
});

//`/api/product/:productId/reviews`
router.get("/product/:productId/review/:reviewId", (req, res, next) => {
  const productId = req.params.productId;
  const reviewId = req.params.reviewId;
  let review = null;
  Review.findByIdAndRemove(reviewId)
    .then((reviewRemoved) => {
      review = reviewRemoved;
      const pr = Product.findById(productId);
      return pr;
    })
    .then((productFound) => {
      let reviewsProductArr = productFound.review;
      // console.log("reviewsProductArr :>> ", reviewsProductArr);
      for (let index = 0; index < reviewsProductArr.length; index++) {
        // console.log("reviewsProductArr[index] :>> ", reviewsProductArr[index]);
        if (reviewsProductArr[index] == reviewId) {
          reviewsProductArr.splice(index, 1);
        }
      }
      const pr = Product.findByIdAndUpdate(
        { _id: productId },
        { review: reviewsProductArr }
      );
      return pr;
    })
    .then((productModified) => {
      const pr = ReviewsRelational.deleteOne({ reviewId });
      return pr;
    })
    .then((userModified) => {
      res.status(200).json(review);
    })
    .catch((err) => {
      next(createError(err));
    });
});

module.exports = router;
