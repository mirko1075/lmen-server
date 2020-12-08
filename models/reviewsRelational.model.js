const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewsRelationalSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", default: null },
    reviewId: { type: Schema.Types.ObjectId, ref: "Review" },
    productId: { type: Schema.Types.ObjectId, ref: "Product" },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const ReviewsRelational = mongoose.model(
  "ReviewsRelational",
  reviewsRelationalSchema
);

module.exports = ReviewsRelational;
