import React from 'react';
import style from './WelcomeBlocks.module.scss'
import {welcomeBlocks} from "../../../utils/const";
import WelcomeBlock from "./WelcomeBlock/WelcomeBlock";



const WelcomeBlocks = () => {
    return (
        <div className={style.wrapper}>
            {welcomeBlocks.map(item =>
                <WelcomeBlock item={item} />
            )}
        </div>
    );
};

export default WelcomeBlocks;
