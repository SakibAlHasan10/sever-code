const findAllSecureApi = require("../../../api/V1/Products/controllers/findAllSecureApi");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.get("/v1/products/secure", verifyToken, findAllSecureApi);

module.exports = router;
