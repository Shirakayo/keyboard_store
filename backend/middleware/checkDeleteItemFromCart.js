const {Cart, CartItem} = require('./../models/models');

module.exports = async function (req, res, next) {
    try {
        const {id} = req.query;
        const user = req.user;
        const userBasket = await Cart.findOne({where: {userId: user.id}});
        const deviceItem = await CartItem.findOne({where: {cartId: userBasket.id, itemId: id}});

        if(deviceItem) {
            return next();
        }
        return res.json("Device didn't find in basket of user");
    } catch (e) {
        res.json(e);
    }
};