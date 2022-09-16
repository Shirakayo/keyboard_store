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
            const basketItems = await CartItem.findAll({where: {cartId: user.id}});
            const basketItemsId = basketItems.map(item =>  [item.itemId]).flat();
            if (basketItemsId.length > 0) {
                const basketArr = await Item.findAll({where: {id: basketItemsId}})
                return res.json(basketArr);
            }
        } catch (e) {
            console.error(e);
        }
    }

    async getItem(req, res) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
            const {userId} = await Cart.findOne({where: {userId: user.id}});
            const basket = await CartItem.findAll({where: {cartId: userId}});
            const basketItemsId = basket.map(item =>  [item.itemId]).flat();
            if (basketItemsId.length > 0) {
                const basketArr = await Item.findAll({where: {id: basketItemsId}})
                return res.json(basketArr);
            }
            return res.json([]);

        } catch (e) {
            console.error(e);
        }
    }

    async deleteItem(req, res) {
        try {
            const {id} = req.query;
            console.log('тут', id)

            const token = req.headers.authorization.split(' ')[1];
            const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
            await Cart.findOne({where: {userId: user.id}}).then(async userBasket => {
                if(userBasket.userId === user.id) {
                    await CartItem.destroy({where: {cartId: userBasket.id, itemId: id}})
                    const basketItems = await CartItem.findAll({where: {cartId: user.id}});
                    return res.json(basketItems);
                } else {
                    return res.json(`You haven't access for delete the item(${id}) from basket that didn't belong to you`);
                }
            });
            return res.json("Product deleted form your cart");
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = new CartController()