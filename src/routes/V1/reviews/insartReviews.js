const insertReviewsApi = require("../../../api/V1/reviews/controllers/insertReviewsApi");

const router = require("express").Router();

router.post("/v1/reviews", insertReviewsApi);

module.exports = router;
