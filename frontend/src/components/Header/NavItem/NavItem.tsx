import React, {FC, useState} from 'react';
import style from "../Header.module.scss";
import {NavLink} from "react-router-dom";
import DropDown from "../../UI/DropDown/DropDown";

type dropList = {
	title: string;
	path: string;
}

interface NavItemProps {
	title: string;
	path: string;
	dropList?: dropList[];
}

const NavItem: FC<NavItemProps> = ({title, dropList, path}) => {
	const [dropDownActive, setDropDownActive] = useState(false);

	return (
		<li
			onMouseEnter={() => setDropDownActive(true)}
			onMouseLeave={() => setDropDownActive(false)}
			className={style.header_nav_item}
		>
			<NavLink className={style.header_nav_item_links} to={path}>
				{title}
			</NavLink>
			{dropDownActive && dropList &&  <DropDown dropList={dropList}/>}
		</li>
	);
};

export default NavItem;
