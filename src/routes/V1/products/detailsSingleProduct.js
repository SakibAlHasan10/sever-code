const findSingleProductApi = require("../../../api/V1/Products/controllers/findSingleProductApi");

const router = require("express").Router();

router.get("/v1/products/:id", findSingleProductApi);

module.exports = router;
