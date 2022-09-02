import React, {FC} from 'react';
import style from './ContentItem.module.scss'

interface IContentItem {
    status: string;
    name: string;
    price: number;
    image: string;
}

const ContentItem:FC<IContentItem> = ({ name, price, image}) => {

    return (
        <div className={style.content}>
            <img className={style.content_image} src={`http://localhost:5000/${image}`} alt={name}/>
            <p className={style.content_name}>[GB] {name}</p>
            <div className={style.content_price}>
               From ${price} AUD
            </div>
        </div>
    );
};

export default ContentItem;
