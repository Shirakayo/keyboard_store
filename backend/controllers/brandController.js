const {Brand} = require('../models/models')

class BrandController {
    async create(req, res) {
        const {name, status, typeId} = req.body
        const brand = await Brand.create({name, status, typeId})
        return res.json(brand)
    }

    async getAll(req, res) {
        let {typeId,status} = req.query
        let brand;
        if (typeId && status) {
            brand = await Brand.findAndCountAll({where: {typeId, status}})
        }
        return res.json(brand)
    }

}

module.exports = new BrandController()
