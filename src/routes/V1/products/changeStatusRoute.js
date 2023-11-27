const changeStatusApi = require("../../../api/V1/Products/controllers/changeStatusApi");

const router = require("express").Router();

router.patch("/v1/products/:id", changeStatusApi);

module.exports = router;
