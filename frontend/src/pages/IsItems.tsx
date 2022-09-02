import React from 'react';
import style from '../assets/style/IsItems/isItems.module.scss'
import {isItemsList} from "../utils/const";
import PageLayout from "../components/UI/PageLayout/PageLayout";
import IsItem from "../views/InStock/IsItem";

const IsItems = () => {
    return (
        <PageLayout>
            <div className={style.wrapper}>
                <h2 className={style.title}>In stock</h2>
                <div className={style.card}>
                    {isItemsList.map(item =>
                        <IsItem img_link={item.img} name={item.name}/>
                    )}
                </div>
            </div>
        </PageLayout>
    );
};

export default IsItems;
