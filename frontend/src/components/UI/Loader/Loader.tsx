import React from 'react';
import style from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={style.loader_wrapper}>
            <div className={style.loader}></div>
        </div>
    );
};

export default Loader;
