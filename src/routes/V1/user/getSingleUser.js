// const verifyToken = require('../../../middlewares/verifyToken')

const getSingleUser = require("../../../api/V1/users/getSingleUser");
const verifyToken = require("../../../middlewares/verifyToken");
const router = require("express").Router();

router.get("/v1/users/:email", getSingleUser);

module.exports = router;