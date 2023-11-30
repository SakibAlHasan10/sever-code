const productUpdateApi = require("../../../api/V1/Products/controllers/productUpdateApi");

const router = require("express").Router();

router.patch("/v1/products/info/:id", productUpdateApi);

module.exports = router;
