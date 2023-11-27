const deleteSingleProductApi = require("../../../api/V1/Products/controllers/deleteSingleProductApi");

const router = require("express").Router();

router.delete("/v1/products/:id", deleteSingleProductApi);

module.exports = router;
