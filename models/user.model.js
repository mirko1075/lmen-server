const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    email: { type: String, unique: true },
    role: { type: String, default: "user" },
    phoneNumber: { type: String, default: null },
    gender: { type: String, default: null },
    birthDateDay: { type: Number, default: null },
    birthDateMonth: { type: Number, default: null },
    birthDateYear: { type: Number, default: null },
    address: { type: String, default: null },
    country: { type: String, default: null },
    city: { type: String, default: null },
    state: { type: String, default: null },
    CP: { type: String, default: null },
    image: String,
    password: String,

    cart: [
      {
        id: { type: Schema.Types.ObjectId, ref: "Product" },
        amount: Number,
      },
    ],
    favorites: [{ type: Schema.Types.ObjectId, ref: "Product", default: null }],
    reviews: [{ reviewId: { type: Schema.Types.ObjectId, ref: "Review" } }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
