import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../../utils/const";
import style from './IsItem.module.css'

interface isItemProps {
	img_link: string;
	name: string;
}


const IsItem:FC<isItemProps> = ({img_link, name}) => {
	return (
		<NavLink to={LOGIN_ROUTE} className={style.card_block}>
			<img className={style.image} src={img_link} alt={name}/>
			<p className={style.name}>{name}</p>
		</NavLink>
	);
};

export default IsItem;
