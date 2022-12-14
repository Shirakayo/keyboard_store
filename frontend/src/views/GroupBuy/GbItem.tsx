import React, {FC} from 'react';
import style from './GbItem.module.scss'
import {NavLink} from "react-router-dom";

interface gbItemProps {
	img_link: string;
	name: string;
	path: string;
}

const GbItem:FC<gbItemProps> = ({img_link, name, path}) => {
	return (
		<NavLink to={path} className={style.card_block}>
			<img className={style.image} src={img_link} alt={name}/>
			<p className={style.name}>{name}</p>
		</NavLink>
	);
};

export default GbItem;
