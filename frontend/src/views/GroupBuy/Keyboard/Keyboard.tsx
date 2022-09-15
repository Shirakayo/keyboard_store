import React from 'react';
import style from './Keyboard.module.scss'
import Content from "../Content/Content";
import PageLayout from "../../../components/UI/PageLayout/PageLayout";
import {renderTitle} from "../../../utils/functions/dynamicTitle";


const KeyboardItem = () => {
    renderTitle('Group Buy Keyboards')
    return (
        <PageLayout>
            <div className={style.wrapper}>
                <h2 className={style.title}>Group Buy Keyboards</h2>
                <div className={style['content-wrapper']}>
                    <Content type={1}/>
                </div>
            </div>
        </PageLayout>
    );
};

export default KeyboardItem;
