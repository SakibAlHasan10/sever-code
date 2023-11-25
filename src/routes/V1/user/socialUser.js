// const verifyToken = require('../../../middlewares/verifyToken')

const insertSocialUser = require("../../../api/V1/users/insertSocialUser");

const router = require("express").Router();

router.put("/v1/users", insertSocialUser);

module.exports = router;
