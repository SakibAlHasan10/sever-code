const Reviews = require("../../models/ProductReviws");

const getReviews = async (filter) => {
  let id = {};
  if (filter) {
    id = { id: filter };
  }
  const reviews = await Reviews.find(id);

  return reviews;
};

module.exports = getReviews;
