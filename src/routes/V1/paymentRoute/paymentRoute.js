const PaymentApi = require("../../../api/V1/authentication/controllers/PaymentApi");

const router = require("express").Router();
router.post("/v1/create-payment-intent", PaymentApi);

module.exports = router;
