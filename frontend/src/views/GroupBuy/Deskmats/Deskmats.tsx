import React from 'react';
import style from './Deskmats.module.scss'
import Content from "../Content/Content";
import PageLayout from "../../../components/UI/PageLayout/PageLayout";

const Deskmats = () => {
    return (
        <PageLayout>
            <section className={style.deskmats}>
                <h2 className={style.title}>Group buy deskmats</h2>
                <div className={style['content-wrapper']}>
                    <Content type={4}/>
                </div>
            </section>
        </PageLayout>
    );
};

export default Deskmats;
