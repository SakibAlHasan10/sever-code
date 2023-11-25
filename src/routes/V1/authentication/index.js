const createCookie = require('../../../api/V1/authentication/controllers/createAuthCookie');

const router = require('express').Router()
//   create jwt token
router.post("/jwt", createCookie );


module.exports = router