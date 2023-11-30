const insertReviewsLib = require("../../../../lib/Reviews/insertReviewsLib");

const insertReviewsApi = async (req, res, next) => {
  try {
    const query = req.body;
    const reviews = await insertReviewsLib(query);
    res.send(reviews);
  } catch (error) {
    next(error);
  }
};

module.exports = insertReviewsApi;
