import React from "react";
import style from "./ItemContent.module.scss";
import { useAppDispatch } from "../../store/store";
import { addItemToCard, changeModalState } from "../../store/slices/cartSlice";
import Quantity from "../UI/Quantity/Quantity";

interface ItemContentProps {
  id: number;
  img: string;
  price: number;
  status: string;
  name: string;
}

const ItemContent = (item: ItemContentProps) => {
  const { img, status, price, name, id } = item;
  const dispatch = useAppDispatch();

  function invokeAddItemToCard() {
    dispatch(addItemToCard(id));
    dispatch(changeModalState(true));
  }

  const soldType = status === "Group-buy" ? "[GB]" : "[IS]";


  return (
    <div className={style.content_wrapper}>
      <img
        className={style.image}
        src={`http://localhost:5000/${img}`}
        alt=""
      />
      <div className={style.content}>
        <h3 className={style.content_title}>{`${soldType} ${name}`}</h3>
        <p className={style.content_price}>{`$${price} AUD`}</p>
        <p className={style.content_status}>{status}</p>
        <small className={style.quantity_title}>Quantity:</small>
        <div className={style.quantity_wrapper}>
          <Quantity/>
        </div>
        <button onClick={invokeAddItemToCard} className={style.cart_button}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemContent;
