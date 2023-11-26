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
  tags: [String],
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
    },
  ],
});

const Products = model("Products", UserSchema);

module.exports = Products;
