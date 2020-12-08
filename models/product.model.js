const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: String,
    description: String,
    material: String,
    category: {String, enum: ["Wallets man","Wallets woman", "Coins purse", "Bags man","Bags woman","Passport case","Dog leashes"]},
    price: Number,
    pics: String,
    review: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  }
  , {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;