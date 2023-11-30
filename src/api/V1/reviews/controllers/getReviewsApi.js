const getReviews = require("../../../../lib/Reviews/getReviews");

const getReviewsApi = async (req, res) => {
  const filter = req.query.id;
  const singleProduct = await getReviews(filter);
  res.send(singleProduct);
};

module.exports = getReviewsApi;