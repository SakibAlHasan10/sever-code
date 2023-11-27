const insertProductApi = require("../../../api/V1/Products/controllers/InsartProductApi");

const router = require("express").Router();

router.post("/v1/products", insertProductApi);

module.exports = router; 
