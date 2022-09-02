import React, {FC} from 'react';
import SwiperComponent from "../components/UI/Swiper/Swiper";
import style from '../assets/style/Welcome/Welcome.module.scss'
import PageLayout from "../components/UI/PageLayout/PageLayout";
import WelcomeBlocks from "../views/Welcome/WelcomeBlocks/WelcomeBlocks";

const Welcome: FC = () => {
    return (
        <PageLayout welcomeStyleHeader={true}>
            <div className={style.wrapper}>
                <div className={style.swiper_wrapper}>
                    <SwiperComponent/>
                </div>
                <div className={style.welcome_block}>
                    <WelcomeBlocks />
                </div>
            </div>
        </PageLayout>
    );
};

export default Welcome;
