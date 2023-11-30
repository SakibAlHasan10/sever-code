const getReviews = require("../../../../lib/Reviews/getReviews");

const getReviewsApi = async (req, res, next) => {
  try {
    const filter = req.query.id;
    const singleProduct = await getReviews(filter);
    res.send(singleProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = getReviewsApi;
