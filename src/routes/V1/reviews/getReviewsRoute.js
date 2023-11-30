const getReviewsApi = require("../../../api/V1/reviews/controllers/getReviewsApi");

const router = require("express").Router();

router.get("/v1/review", getReviewsApi);

module.exports = router;
