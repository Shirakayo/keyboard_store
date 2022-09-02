import React, {PropsWithChildren} from 'react';
import style from './WelcomeBlock.module.scss'
import {NavLink} from "react-router-dom";

interface itemProps {
    name?: string;
    description?: string;
    path: string;
    img: string;
}

const WelcomeBlock = ({item}: PropsWithChildren<{ item: itemProps }>) => {
    return (
        <div className={style.wrapper}>
            <NavLink to={item.path}>
                <img className={style.image} src={item.img} alt={item.name}/>
                <div className={style.content}>
                    <span className={style.content_description}>{item.description}</span>
                    <p className={style.content_title}>{item.name}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default WelcomeBlock;
