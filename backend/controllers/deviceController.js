const uuid = require('uuid')
const path = require('path');
const {Item, ItemInfo, Brand} = require('../models/models')
const ApiError = require('../errors/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info, status, availability} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Item.create({name, price, brandId, typeId, status, img: fileName, availability});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ItemInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page, status, sortType} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        let brands;
        if (status && typeId) {
            devices = await Item.findAndCountAll({where: {status, typeId}, limit, offset})
            brands = await Brand.findAndCountAll({where: {typeId, status}, limit, offset})
        }
        if (status && typeId && brandId) {
            devices = await Item.findAndCountAll({where: {status, typeId, brandId}, limit, offset})
            brands = await Brand.findAndCountAll({where: {typeId, status}, limit, offset})
        }
        if (status && typeId && sortType) {
            devices = await Item.findAndCountAll({where: {status, typeId}, limit, offset})
            brands = await Brand.findAndCountAll({where: {typeId, status}, limit, offset})
            if (sortType === 'a_desc') {
                devices.rows.sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if (sortType === 'a_asc') {
                devices.rows.sort((a, b) => a.name < b.name ? 1 : -1)
            }
            if (sortType === 'price_desc') {
                devices.rows.sort((a, b) => a.price < b.price ? 1 : -1)
            }
            if (sortType === 'price_asc') {
                devices.rows.sort((a, b) => a.price > b.price ? 1 : -1)
            }
            if (sortType === 'date_desc') {
                devices = await Item.findAndCountAll({where: {status, typeId}, order: [['updatedAt', 'DESC']]})
            }
            if (sortType === 'date_asc') {
                devices = await Item.findAndCountAll({where: {status, typeId}, order: [['updatedAt', 'ASC']]})
            }
        }
        const returnBrands = brands.rows.map(item => item).flat()
        const deviceReturn = {
            devices,
            returnBrands
        }
        return res.json(deviceReturn)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Item.findOne(
            {
                where: {id},
                include: [{model: ItemInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()
