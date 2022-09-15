const {Item, CartItem, Cart} = require("../models/models");
const jwt = require("jsonwebtoken");



class CartController {
    async addToCart(req,res){
        try {
            const {id} = req.body
            const token = req.headers.authorization.split(' ')[1];
            const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
            const cart = await Cart.findOne({where: {userId: user.id}});
            await CartItem.create({cartId : cart.id, itemId: Number(id)});
            return res.json("Product added in card");
        } catch (e) {
            console.error(e);
        }
    }

    async getItem(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
            const {id} = await Cart.findOne({where: {userId: user.id}});
            const basket = await CartItem.findAll({where: {cartId: id}});
            const basketArr = []
            if (basket.length > 0) {
                const basketArr = await Item.findAll({where: {id: id}})
                return res.json(basketArr);
            }
            return res.json(basketArr);

        } catch (e) {
            console.error(e);
        }
    }

    async deleteItem(req, res) {
        try {
            const {id} = req.query;
            console.log('тут', id)

            const token = req.headers.authorization.split(' ')[1];
            console.log(token)
            const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
            await Cart.findOne({where: {userId: user.id}}).then(async userBasket => {
                if(userBasket.userId === user.id) {
                    await CartItem.destroy({where: {cartId: userBasket.id, itemId: id}})
                } else {
                    return res.json(`You haven't access for delete the item(${id}) from basket that didn't belong to you`);
                }
            });
            return res.json("Product deleted form your card");
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = new CartController()