const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  photo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const User = model("Users", UserSchema);

module.exports = User;
