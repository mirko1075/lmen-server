require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./../models/user.model");
const Product = require("./../models/product.model");
const Review = require("./../models/review.model");
const userArr = require("./user-mockup");
const productArr = require("./product-mockup");
const reviewArr = require("./review-mockup");

//Connection to DB parameters
const DB_NAME = process.env.DB_NAME.toString();
const DB_CONN_STR = process.env.MONGODB_URI.toString();

const PRODUCTS = process.env.PRODUCTS;

function addDays(dateObj, numDays) {
  let num = Math.round(Math.random() * numDays - 0);
  dateObj.setDate(dateObj.getDate() + num);
  //// console.log("dateObj", dateObj, "num", num, "numDays", numDays);
  return dateObj;
}
function randomWord(wordsNum) {
  let str = "";
  if (wordsNum > 1) {
    str = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "");
    for (let i = 0; i < wordsNum; i++) {
      str += " " + str;
    }
  } else {
    str = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "");
  }
  return str;
}

function randomize(arr) {
  let numRandom = Math.round(Math.random() * (arr.length - 1));
  // console.log("numRandom", numRandom);
  return arr[numRandom];
}

// SEED SEQUENCE

// ESTABILISH DB CONNECTION

mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    new: true,
  })
  .then((x) => {
    console.log("Connected to DB " + DB_NAME);
    const pr = x.connection.dropDatabase();
    return pr;
  })
  .then((databaseDropped) => {
    console.log("Database dropped");
    const pr = User.create(userArr);
    return pr;
  })
  .then((usersCreated) => {
    console.log(`Created ${usersCreated.length} Users`);
    //   const pr = Review.create(reviewArr);
    //   return pr;
    // })
    // .then((createdReviews) => {
    //   console.log(`Created ${createdReviews.length} Reviews`);
    // const reviewsIdsArr= [];
    // for (let i=0; i<createdReviews.length; i++){
    //     reviewsIdsArr.push(createdReviews[i]._id)
    // }
    // const newProductArr= productArr.forEach((elem)=>{
    //      elem.review=reviewsIdsArr;
    // })
    // console.log('productArr', productArr)
    const pr = Product.create(productArr);
    return pr;
  })
  .then((createdProducts) => {
    console.log(`Created ${createdProducts.length} Products`);

    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
