import React from 'react';
import Content from "../Content/Content";
import style from './Switches.module.scss'
import PageLayout from "../../../components/UI/PageLayout/PageLayout";

const Switches = () => {
    return (
        <PageLayout>
            <section className={style.switches}>
                <h2 className={style.title}>Group Buy Switches</h2>
                <div className={style['content-wrapper']}>
                    <Content type={3}/>
                </div>
            </section>
        </PageLayout>
    );
};

export default Switches;
