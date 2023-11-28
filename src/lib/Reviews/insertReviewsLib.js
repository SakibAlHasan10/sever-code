
const Reviews = require("../../models/ProductReviws");

const insertReviewsLib = async (query) => {
  const reviews = await Reviews.insertMany(query);

  return reviews;
};

module.exports = insertReviewsLib;
