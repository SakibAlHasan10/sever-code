const getReviews = require("../../../../lib/Reviews/getReviews");

const getReviewsApi = async (req, res) => {
  const filter = req.params.id;
  const singleProduct = await getReviews(filter);
  res.send(singleProduct);
};

module.exports = getReviewsApi;