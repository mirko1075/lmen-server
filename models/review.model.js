const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    title: String,
    description: String,
    rate: Number,
    reviewUser: { type: Schema.Types.ObjectId, ref: "User", default: null },
    reviewProduct: {
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
