const insertReviewsLib = require("../../../../lib/Reviews/insertReviewsLib");

const insertReviewsApi = async (req, res) => {
  const query = req.body;
    // console.log(query)
  const reviews = await insertReviewsLib(query);
  res.send(reviews);
};

module.exports = insertReviewsApi;
