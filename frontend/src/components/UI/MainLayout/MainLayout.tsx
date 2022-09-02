import React, {FC} from 'react';
import {LayoutProps} from "../../../types/UI/MainLayout/MainLayout-types";
import style from './MainLayout.module.scss'


const MainLayout:FC<LayoutProps> = ({children}) => {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    );
};

export default MainLayout;
