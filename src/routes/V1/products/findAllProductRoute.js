const findAllProductApi = require('../../../api/V1/Products/controllers/findAllProductApi')


const router = require('express').Router()


router.get('/v1/products',findAllProductApi)

module.exports = router