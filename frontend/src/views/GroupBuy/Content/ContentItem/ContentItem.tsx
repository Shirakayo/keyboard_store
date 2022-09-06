import React from "react";
import style from "./ContentItem.module.scss";
import { NavLink } from "react-router-dom";

interface IContentItem {
  status: string;
  id: number;
  name: string;
  price: number;
  image: string;
}

const ContentItem = ({ name, price, image, id }: IContentItem) => {
  return (
    <NavLink className={style.item_link} to={`/products/${id}`}>
      <div className={style.content}>
        <img
          className={style.content_image}
          src={`http://localhost:5000/${image}`}
          alt={name}
        />
        <p className={style.content_name}>[GB] {name}</p>
        <div className={style.content_price}>From ${price} AUD</div>
      </div>
    </NavLink>
  );
};

export default ContentItem;
