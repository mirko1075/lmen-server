const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    title: String,
    message: String,
    rate: Number,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      default: null,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
