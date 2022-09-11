import React from 'react';
import slide1 from '../../../assets/img/Welcome/slide1.png'
import slide2 from '../../../assets/img/Welcome/slide2.png'
import slide3 from '../../../assets/img/Welcome/slide3.png'
import slide4 from '../../../assets/img/Welcome/slide4.png'
import style from './Swiper.module.scss'
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from "keen-slider/react";



const SwiperComponent = () => {
	const [sliderRef] = useKeenSlider( {
			loop: true,
		},
		[
			(slider) => {
				let timeout: any
				let mouseOver = false
				function clearNextTimeout() {
					clearTimeout(timeout)
				}
				function nextTimeout() {
					clearTimeout(timeout)
					if (mouseOver) return
					timeout = setTimeout(() => {
						slider.next()
					}, 2000)
				}
				slider.on("created", () => {
					slider.container.addEventListener("mouseover", () => {
						mouseOver = true
						clearNextTimeout()
					})
					slider.container.addEventListener("mouseout", () => {
						mouseOver = false
						nextTimeout()
					})
					nextTimeout()
				})
				slider.on("dragStarted", clearNextTimeout)
				slider.on("animationEnded", nextTimeout)
				slider.on("updated", nextTimeout)
			},
		])
	
	
	return (
		<div ref={sliderRef} className={`keen-slider ${style.swiper}`}>
				<img src={slide1} className={`keen-slider__slide ${style.swiper_content}`} alt={''}/>
				<img src={slide2} className={`keen-slider__slide ${style.swiper_content}`} alt={''}/>
				<img src={slide3} className={`keen-slider__slide ${style.swiper_content}`} alt={''}/>
				<img src={slide4} className={`keen-slider__slide ${style.swiper_content}`} alt={''}/>
		</div>
	);
};

export default SwiperComponent;
