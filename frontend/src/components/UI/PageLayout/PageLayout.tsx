import React, {PropsWithChildren} from 'react';
import {Header} from "../../Header/Header";
import Footer from "../../Footer/Footer";
import style from './PageLayout.module.scss'



const PageLayout = ({headerState, welcomeStyleHeader, children}: PropsWithChildren<{headerState?: boolean, welcomeStyleHeader?: boolean}>) => {
    return (
        <div className={style.wrapper}>
            {!headerState && <Header welcomeStyleHeader={welcomeStyleHeader} />}
            <div className={style.main}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default PageLayout;
