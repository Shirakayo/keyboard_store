const Router = require('express')
const router = new Router()
const cartController = require('../controllers/cartController')

router.post('/', cartController.addToCart)
router.get('/', cartController.getItem)
router.delete('/',  cartController.deleteItem)

module.exports = router