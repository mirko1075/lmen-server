const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, default: "", required: true },
    image: { type: String, default: "", required: true },
    price: { type: Number, default: 0, required: true },
    material: { type: String, default: "", required: false },
    technic: { type: String, default: "", required: false },
    category: { type: String, default: "", required: false },
    dimensions: { type: String, default: "", required: false },
    stock: { type: Number, default: 10, required: false },
    description: { type: String, default: "", required: true },
    rating: { type: Number, default: 0, required: false },
    numReviews: { type: Number, default: 0, required: false },
    review: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
