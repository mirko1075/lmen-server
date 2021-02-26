const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;
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
  console.log("Get product list");
  Product.find()
    .populate({
      path: "review",
      populate: {
        path: "userId",
      },
    })
    .then((productList) => {
      // console.log("productList :>> ", productList);
      res.status(200).json(productList);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/products' Create Product
router.post("/products", (req, res, next) => {
  console.log("Add product");
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
  console.log("Get product detail");
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
      console.log("productFound :>> ", productFound);
      res.status(200).json(productFound);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/cart' Get all products
router.get("/cart", isLoggedIn, (req, res, next) => {
  console.log("Get user cart");
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
  console.log(" Get categories");
  Product.find()
    .then((productsFound) => {
      const categoriesArr = [];
      productsFound.forEach((elem) => {
        // //console.log("elem :>> ", elem);
        categoriesArr.push(elem.category);
      });
      const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
      };

      const response = { data: categoriesArr.filter(onlyUnique) };
      // //console.log("response :>> ", response);
      res.status(200).json(response);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// GET '/products per categories' Get all products
router.get("/categories/:category", (req, res, next) => {
  console.log("Get products per categories");
  const category = req.params.category;
  Product.find({ category })
    .then((productList) => {
      // //console.log("productList :>> ", productList);
      res.status(200).json(productList);
    })
    .catch((err) => {
      next(createError(err));
    });
});

// post '/cart' Update cart
router.post("/cart", isLoggedIn, (req, res, next) => {
  console.log("Update user Cart");
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

// POST  product/:productId/reviews / Create product reviews
router.post("/product/:productId/reviews", isLoggedIn, (req, res, next) => {
  console.log("reviews create post");
  const userId = req.session.currentUser ? req.session.currentUser._id : "";
  const { title, message, rate, productId } = req.body;
  let review = null;
  let reviewId = null;
  // CREATING REVIEW
  Review.create({ title, message, rate, userId, productId })
    .then((reviewCreated) => {
      review = reviewCreated;
      reviewId = reviewCreated._id;
      //console.log("reviewId :>> ", reviewId);
      const pr = ReviewsRelational.create({ userId, reviewId, productId });
      return pr;
    })
    .then((ReviewsRelationalCreated) => {
      const pr = Product.findById(productId);
      return pr;
    })
    .then((productFound) => {
      //console.log("ProductFound :>> ", productFound);
      let productreviewArr = productFound.review;
      let rating = Number(productFound.rating);
      let numReviews = Number(productFound.numReviews);
      // console.log("rate, rating :>> ", rate, rating);
      rating += Number(rate);
      numReviews++;
      productreviewArr.push(reviewId);

      //UPDATING PRODUCT REVIEWS
      const pr = Product.findByIdAndUpdate(
        { _id: productId },
        { review: productreviewArr, rating, numReviews }
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
router.delete(
  "/product/:productId/review/:reviewId",
  isLoggedIn,
  (req, res, next) => {
    console.log("Removing review");
    const reviewId = req.params.reviewId;
    const productId = req.params.productId;
    // console.log("reviewId, productId :>> ", reviewId, productId);
    let review = null;
    Review.findByIdAndRemove(reviewId)
      .then((reviewRemoved) => {
        review = reviewRemoved;
        const pr = Product.findById(productId);
        return pr;
      })
      .then((productFound) => {
        let reviewsProductArr = productFound.review;
        // //console.log("reviewsProductArr :>> ", reviewsProductArr);
        for (let index = 0; index < reviewsProductArr.length; index++) {
          // //console.log("reviewsProductArr[index] :>> ", reviewsProductArr[index]);
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
  }
);

router.post("/sendContact", (req, res, next) => {
  // MAIL Settings
console.log('Mail :>> ');
  const oauth2Client = new OAuth2(
    "955202149080-6rjcm41f3gsvhiapmmh7ngpqc3nomapl.apps.googleusercontent.com", // ClientID
    "qxfsS9o-RTP-x7rJESf9oWa5", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);
oauth2Client.setCredentials({
  refresh_token: "1//040QTBjr066tNCgYIARAAGAQSNwF-L9IresvxkJGkVGhbnwMkEcMYDiPWGLwWo5g3RIXoZIb_qzKWgjuPmGb4MlzuvCW5pOTr4bI"
});

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
      type: "OAuth2",
      user: "mirko.siddi@gmail.com", 
      clientId: "955202149080-6rjcm41f3gsvhiapmmh7ngpqc3nomapl.apps.googleusercontent.com",
      clientSecret: "qxfsS9o-RTP-x7rJESf9oWa5",
      refreshToken: "1//040QTBjr066tNCgYIARAAGAQSNwF-L9IresvxkJGkVGhbnwMkEcMYDiPWGLwWo5g3RIXoZIb_qzKWgjuPmGb4MlzuvCW5pOTr4bI",
      accessToken: "ya29.A0AfH6SMDGwOvvhBabPih_PhLuHR4g_EwDpBSte7PLsbx6S910DBZjACqQMP6wu-ajH8To6A4usonMvzvmHwKyw8K19J9X2zLMqrRHNZd8ZGC5aB0HS1Ipda4Gi2Hj2UBDPaG8sHZkm-AMRcX-sKRhEG4gpilU"
  },
  tls: {
    rejectUnauthorized: false
  }
});
let {email,message, firstName, lastName} = req.body;
let name = `${firstName}  ${lastName}  ✔ ${email}`;
let emailTo='mirko.siddi@gmail.com'

let subject = `Contact from name: ${name} `;
let htmlTemplate=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail</title>
</head>
<body>
    ${message}
</body>
</html>
`
const mailOptions = {
  from: email,
  to: emailTo,
  subject,
  generateTextFromHTML: true,
  html: htmlTemplate
};

  console.log("Sending contact form");


  smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
  });
});
module.exports = router;
