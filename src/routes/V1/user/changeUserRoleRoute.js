const changeUserRoleApi = require("../../../api/V1/users/changeUserRoleApi");

const router = require("express").Router();

router.patch("/v1/user/role/:id", changeUserRoleApi);

module.exports = router;
