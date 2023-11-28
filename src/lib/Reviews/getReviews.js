const Reviews = require("../../models/ProductReviws");

const getReviews = async (filter) => {
  const reviews = await Reviews.find({ id: filter });

  return reviews;
}; 

module.exports = getReviews;
