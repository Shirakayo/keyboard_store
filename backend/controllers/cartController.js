const { Item, CartItem, Cart } = require("../models/models");
const jwt = require("jsonwebtoken");

class CartController {
  async addToCart(req, res) {
    try {
      const { id } = req.body;
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
      const cart = await Cart.findOne({ where: { userId: user.id } });
      await CartItem.create({ cartId: cart.id, itemId: Number(id) });
      const basketItems = await CartItem.findAll({
        where: { cartId: user.id },
      });
      const basketItemsId = basketItems.map((item) => [item.itemId]).flat();
      if (basketItemsId.length > 0) {
        const basketArr = await Item.findAll({ where: { id: basketItemsId } });
        return res.json(basketArr);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async getItem(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
      const { userId } = await Cart.findOne({ where: { userId: user.id } });
      const basket = await CartItem.findAll({ where: { cartId: userId } });
      const basketItemsId = basket.map((item) => [item.itemId]).flat();
      console.log(basketItemsId.length, "Длина массива корзины");
      if (basketItemsId.length > 0) {
        const basketArr = await Item.findAll({ where: { id: basketItemsId } });
        const totalPrice = basketArr
          .map((item) => item)
          .map((item) => item.price)
          .reduce((acc, item) => acc + item, 0);
        const returnItems = {
          cart_items: basketArr,
          totalCart_price: totalPrice,
        };
        return res.json(returnItems);
      }
      const returnItems = {
        cart_items: [],
        totalCart_price: 0,
      };
      return res.json(returnItems);
    } catch (e) {
      console.error(e);
    }
  }

  async deleteItem(req, res) {
    try {
      const { id } = req.query;
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
      await Cart.findOne({ where: { userId: user.id } }).then(
        async (userBasket) => {
          if (userBasket.userId === user.id) {
            await CartItem.destroy({
              where: { cartId: userBasket.id, itemId: id },
            });
            const basketItems = await CartItem.findAll({
              where: { cartId: user.id },
            });
            const cartAfterDelete = basketItems
              .map((item) => [item.itemId])
              .flat();
            if (cartAfterDelete.length > 0) {
              const basketArr = await Item.findAll({
                where: { id: cartAfterDelete },
              });
              const totalPrice = basketArr
                .map((item) => item)
                .map((item) => item.price)
                .reduce((acc, item) => acc + item, 0);
              const returnItems = {
                cart_items: basketArr,
                totalCart_price: totalPrice,
              };
              return res.json(returnItems);
            }
            const returnItems = {
              cart_items: [],
              totalCart_price: 0,
            };
            return res.json(returnItems);
          } else {
            return res.json(
              `You haven't access for delete the item(${id}) from basket that didn't belong to you`
            );
          }
        }
      );
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = new CartController()