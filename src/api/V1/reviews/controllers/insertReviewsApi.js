const insertReviewsLib = require("../../../../lib/Reviews/insertReviewsLib");

const insertReviewsApi = async (req, res) => {
  const query = req.body;
  const reviews = await insertReviewsLib(query);
  res.send(reviews);
};

module.exports = insertReviewsApi;
