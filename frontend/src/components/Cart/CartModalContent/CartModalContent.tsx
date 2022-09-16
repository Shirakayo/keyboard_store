import React from 'react';
import style from "./CartModalContent.module.scss";
import {NavLink} from "react-router-dom";
import {GB_ROUTES} from "../../../utils/const";
import {useAppDispatch} from "../../../store/store";
import {deleteItemFromCard} from "../../../store/slices/cartSlice";
import {Status} from "../../../types/userSlice-types/userSlice-types";
import Loader from "../../UI/Loader/Loader";

interface items {
    id: number;
    name: string;
    price: string;
    img: string;
}

interface CartModalContent {
    items: items[];
    closeModal: () => void;
    status: string;
}

const CartModalContent = ({items, closeModal, status}: CartModalContent) => {
    const dispatch = useAppDispatch();

    if (items.length === 0) {
        return (
            <div className={style.empty}>
                <p className={style.empty_title}>You cart is empty</p>
                <NavLink onClick={closeModal} className={style.empty_link} to={GB_ROUTES}>Start shopping</NavLink>
            </div>
        )
    }

    if (status === Status.LOADING) {
      return <Loader />;
    }

    function removeItem(id: number) {
        dispatch(deleteItemFromCard(id))
    }

    console.log(items)

    return (
      <div>
        {items.map((item) => (
          <div className={style.body} key={item.id}>
            <img className={style.body_image} src={`http://localhost:5000/${item.img}`} alt={item.name} />
              <div>
                  <p className={style.body_name}>{item.name}</p>
                  <button onClick={() => removeItem(item.id)} className={style.body_button}>Remove</button>
              </div>
          </div>
        ))}
      </div>
    );
};

export default CartModalContent;
