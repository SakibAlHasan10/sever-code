const insertProductApi = require("../../../api/V1/Products/InsartProductApi");

const router = require("express").Router();

router.put("/v1/products", insertProductApi);

module.exports = router;
