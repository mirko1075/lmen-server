const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {type: String, unique: true },
    role: {type: String, default: "user" },
    phoneNumber: String,
    gender: {String, enum: ["Male", "Female", "Other"]},
    birthDateDay: Number,
    birthDateMonth: Number,
    birthDateYear: Number,
    address: String,
    country: String,
    city: String,
    state: String,
    CP: String,
    username: String,
    password: String,
    basket: [{productId:{type: Schema.Types.ObjectId, ref: "Product"}, quantity:Number}],
    favorites:[{ type: Schema.Types.ObjectId, ref: "Product", default:null }],
    reviews: [{reviewId:{type: Schema.Types.ObjectId, ref: "Review"}}],
  }
  , {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
});


const User = mongoose.model('User', userSchema);

module.exports = User;