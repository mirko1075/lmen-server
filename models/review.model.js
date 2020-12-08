const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        title: String,
        description: String,
        rate: [{type: Number, min: 1, max: 5 }],
        reviewUser: [{ type: Schema.Types.ObjectId, ref: "User" }],
        reviewProduct: [{ type: Schema.Types.ObjectId, ref: "Product" }],
      }
      , {
        timestamps: {
          createdAt: 'created_at',
          updatedAt: 'updated_at'
        },
});


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;