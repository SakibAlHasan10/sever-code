const insertUser = require('../../../api/V1/users/insartUser')
// const findAll = require('../../../api/v1/services/controllers/findAll')
// const verifyToken = require('../../../middlewares/verifyToken')


const router = require('express').Router()


router.post('/v1/users',insertUser)

module.exports = router