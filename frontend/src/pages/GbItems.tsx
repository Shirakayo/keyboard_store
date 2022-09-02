import React from 'react';
import style from '../assets/style/GbItems/GbItems.module.scss'
import {GB_ROUTES, gbItemsList} from "../utils/const";
import {Outlet, useLocation} from "react-router-dom";
import PageLayout from "../components/UI/PageLayout/PageLayout";
import GbItem from "../views/GroupBuy/GbItem";

const GbItems = () => {
    const location = useLocation()

    if (location.pathname !== GB_ROUTES) {
        return (
            <Outlet/>
        )
    }

    return (
        <PageLayout>
            <div className={style.wrapper}>
                <h2 className={style.title}>Group buys</h2>
                <div className={style.card}>
                    {gbItemsList.map(item =>
                        <GbItem path={item.path} img_link={item.img} name={item.name}/>
                    )}
                </div>
            </div>
        </PageLayout>
    );
};

export default GbItems;
