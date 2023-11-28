const findProductByUserApi = require("../../../api/V1/Products/controllers/findProductByUserApi");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.get("/v1/user/products/:email", verifyToken, findProductByUserApi);

module.exports = router;
 