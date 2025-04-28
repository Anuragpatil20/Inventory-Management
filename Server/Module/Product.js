const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true }); // 👈 This adds createdAt and updatedAt automatically

const UserModule = mongoose.model("users", UserSchema);

module.exports = UserModule;
