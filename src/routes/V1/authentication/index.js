const {
  createAuthCookie,
  logout,
} = require("../../../api/V1/authentication/controllers");

const router = require("express").Router();
//   create jwt token
router.post("/v1/jwt", createAuthCookie);
// logout
router.post("/v1/logout", logout);

module.exports = router;
