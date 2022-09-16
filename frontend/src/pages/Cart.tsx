import React, {FC} from 'react';
import PageLayout from "../components/UI/PageLayout/PageLayout";
import style from '../assets/style/Cart/Cart.module.scss'

const Cart: FC = () => {
    return (
        <PageLayout>
            <div className={style.cart}>
                <div className={style.cart_wrapper}>
                    Cart
                </div>
            </div>
        </PageLayout>
    );
};

export default Cart;
