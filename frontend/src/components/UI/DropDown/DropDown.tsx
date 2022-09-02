import React, {FC} from 'react';
import style from './DropDown.module.scss'
import {NavLink} from "react-router-dom";

type dropDownType = {
	title: string;
	path: string;
}

interface DropDownProps {
	dropList: dropDownType[],
}


const DropDown: FC<DropDownProps> = ({dropList}) => {
	return (
		<ul className={style.dropdown}>
			{dropList && dropList.map(list =>
				<li className={style.dropdown_content}>
					<NavLink className={style.dropdown_links} to={list.path}>
						{list.title}
					</NavLink>
				</li>
			)}
		</ul>
	)
}

export default DropDown;
