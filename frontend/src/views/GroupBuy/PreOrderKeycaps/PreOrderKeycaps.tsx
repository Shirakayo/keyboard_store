import React from 'react';
import Content from "../Content/Content";
import style from './PreOrderKeycaps.module.scss'
import PageLayout from "../../../components/UI/PageLayout/PageLayout";
import {renderTitle} from "../../../utils/functions/dynamicTitle";

const PreOrderKeycaps = () => {
    renderTitle('Pre Order Keycaps')
    return (
        <PageLayout>
            <section className={style.pre_order_keycaps}>
                <h2 className={style.title}>Pre-order Keycaps</h2>
                <div className={style['content-wrapper']}>
                    <Content type={2}/>
                </div>
            </section>
        </PageLayout>
    );
};

export default PreOrderKeycaps;
