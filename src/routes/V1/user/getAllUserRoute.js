const getAllUserApi = require("../../../api/V1/users/getAllUserApi");
const verifyToken = require("../../../middlewares/verifyToken");
const router = require("express").Router();

router.get("/v1/users", verifyToken, getAllUserApi);

module.exports = router;
