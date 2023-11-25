const {
  createAuthCookie,
  logout,
} = require("../../../api/V1/authentication/controllers");

const router = require("express").Router();
//   create jwt token
router.post("/jwt", createAuthCookie);
// logout
router.post("/logout", logout);

module.exports = router;
