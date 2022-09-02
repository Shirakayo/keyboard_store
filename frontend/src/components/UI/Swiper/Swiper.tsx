import React, {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../../assets/img/Welcome/slide1.png'
import slide2 from '../../../assets/img/Welcome/slide2.png'
import slide3 from '../../../assets/img/Welcome/slide3.png'
import slide4 from '../../../assets/img/Welcome/slide4.png'
import {Autoplay, EffectFade, Pagination} from "swiper";
import style from './Swiper.module.scss'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const SwiperComponent:FC = () => {
	return (
		<Swiper
			modules={[Pagination, EffectFade, Autoplay]}
			slidesPerView={1}
			centeredSlides={true}
			speed={300}
			autoplay={{
				delay: 5000,
			}}
			loop={true}
			className={style.swiper}
			pagination={{
				clickable: true
			}}
		>
			<SwiperSlide>
				<img className={style.swiper_content} src={slide1} alt=""/>
			</SwiperSlide>
			<SwiperSlide>
				<img className={style.swiper_content} src={slide2} alt=""/>
			</SwiperSlide>
			<SwiperSlide>
				<img className={style.swiper_content} src={slide3} alt=""/>
			</SwiperSlide>
			<SwiperSlide>
				<img className={style.swiper_content} src={slide4} alt=""/>
			</SwiperSlide>
		</Swiper>
	);
};

export default SwiperComponent;
