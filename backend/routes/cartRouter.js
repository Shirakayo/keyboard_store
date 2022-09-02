const Router = require('express')
const router = new Router()
const cartController = require('../controllers/cartController')
const authMiddleware = require('../middleware/authMiddleware')
const checkDeleteItemFromCart = require('../middleware/checkDeleteItemFromCart')

router.post('/', cartController.addToCart)
router.get('/', cartController.getItem)
router.delete('/', authMiddleware, checkDeleteItemFromCart,  cartController.deleteItem)

module.exports = router