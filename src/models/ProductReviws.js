const { model, Schema } = require("mongoose");

const ReviewSchema = new Schema(
  {
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }, 
    id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Reviews = model("Reviews", ReviewSchema);

module.exports = Reviews;
