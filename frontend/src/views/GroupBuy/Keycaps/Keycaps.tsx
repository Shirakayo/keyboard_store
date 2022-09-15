import React from 'react';
import style from './Keycaps.module.scss'
import Content from "../Content/Content";
import PageLayout from "../../../components/UI/PageLayout/PageLayout";
import {renderTitle} from "../../../utils/functions/dynamicTitle";

const Keycaps = () => {
    renderTitle('Group Buy Keycaps')
    return (
        <PageLayout>
            <section className={style.keycaps}>
                <h2 className={style.title}>Group Buy Keycaps</h2>
                <div className={style['content-wrapper']}>
                    <Content type={2}/>
                </div>
            </section>
        </PageLayout>
    );
};

export default Keycaps;
