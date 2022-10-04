import React, { useEffect } from "react";
import PageLayout from "../components/UI/PageLayout/PageLayout";
import style from "../assets/style/Cart/Cart.module.scss";
import { cartSelector, fetchCardItem } from "../store/slices/cartSlice";
import { useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem/CartItem";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cartItems, totalCount } = useSelector(cartSelector);

  useEffect(() => {
    dispatch(fetchCardItem());
  }, []);

  if (cartItems.length === 0) {
    return (
      <PageLayout>
        <div className={style.empty_cart}>
          <div className={style.empty_cart_title}>Cart</div>
          <p className={style.empty_cart_subtitle}>Your cart is empty</p>
          <button className={style.empty_cart_button}>Start Shopping</button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className={style.cart}>
        <div className={style.cart_wrapper}>
          <div className={style.cart_title}>Cart</div>
          <div className={style.cart_content}>
            <div className={style.cart_content_items}>
              <div className={style.cart_content_items_title}>
                <span className={style.product}>Product</span>
                <span className={style.quantity}>Quantity</span>
                <span className={style.total}>Total</span>
              </div>
              <div className={style.cart_content_items_body}>
                {cartItems.map((item) => (
                  <CartItem
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    img={item.img}
                  />
                ))}
              </div>
            </div>
            <div className={style.cart_content_estimate}>
              <div className={style.cart_content_estimate_total}>
                <p>total</p>
                <span>{`$${totalCount} AUD`}</span>
              </div>
              <p className={style.cart_content_estimate_info}>
                Shipping & taxes calculated at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Cart;
