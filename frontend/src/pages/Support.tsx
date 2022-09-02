import React, {FC} from 'react';
import PageLayout from "../components/UI/PageLayout/PageLayout";
import style from '../assets/style/Support/Support.module.scss'

const Support: FC = () => {
    return (
        <PageLayout>
            <div className={style.wrapper}>
                Support page
            </div>
        </PageLayout>
    );
};

export default Support;
