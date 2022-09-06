import React, { useState } from "react";
import style from "./ItemContent.module.scss";

interface ItemContentProps {
  img: string;
  price: number;
  status: string;
  name: string;
}

const ItemContent = (item: ItemContentProps) => {
  const { img, status, price, name } = item;
  const [quantityValue, setQuantityValue] = useState(1);
  const soldType = status === "Group-buy" ? "[GB]" : "[IS]";

  const validateInput = (field: any) => {
    if (field === '0') {
      return
    }
    setQuantityValue((prev) => (/\d+/.test(field) ? field : prev));
  };

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
        <div className={style.quantity}>
          <button>-</button>
          <input
            type="number"
            className={style.quantity_field}
            min={1}
            value={quantityValue}
            onChange={(e) => validateInput(e.target.value)}
          />
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default ItemContent;
