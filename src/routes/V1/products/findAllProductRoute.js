const findAllProductApi = require('../../../api/V1/Products/controllers/findAllProductApi')
const verifyToken = require('../../../middlewares/verifyToken')


const router = require('express').Router()


router.get('/v1/products',findAllProductApi)

module.exports = router