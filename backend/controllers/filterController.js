const {Filter} = require('../models/models')

class FilterController {
    async create(req, res) {
        const {name, title, typeId} = req.body
        // const filter = JSON.parse(JSON.stringify(title))
        const filterModel = await Filter.create({name, title, typeId})
        return res.json(filterModel)
    }

    async getAll(req, res) {
        const filters = await Filter.findAll()
        return res.json(filters)
    }

    async delete(req,res) {
        try {
            const {name} = req.body;
            await Filter.findOne({where: {name: name}}).then(async Filter => {
                await Filter.destroy({where: {name: name}});
            });
            return res.json("Filter delete");
        } catch (e) {
            console.error(e);
        }
    }

}

module.exports = new FilterController()
