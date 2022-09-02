const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const cartRouter = require('./cartRouter')
const filterRouter = require('./filterRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/item', deviceRouter)
router.use('/filter', filterRouter)
router.use('/cart', cartRouter)

module.exports = router
