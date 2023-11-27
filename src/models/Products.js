const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  links: {
    type: String,
    required: true,
  },
  tags: [Object],
  owner: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
      time: {
        type: String,
      },
    },
  ],
  createdAt: Date
});

const Products = model("Products", UserSchema);

module.exports = Products;
