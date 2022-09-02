const Router = require('express')
const router = new Router()
const filterController = require('../controllers/filterController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), filterController.create)
router.delete('/', checkRole('ADMIN'), filterController.delete)
router.get('/', filterController.getAll)

module.exports = router
