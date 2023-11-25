const insertUser = require("../../../api/V1/users/insartUser");

const router = require("express").Router();

router.post("/v1/users", insertUser);

module.exports = router;
