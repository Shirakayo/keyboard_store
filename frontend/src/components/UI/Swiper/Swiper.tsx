import React from "react";

import style from "./Swiper.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {swiperSlides} from "../../../utils/swiper";


const options = { delay: 1000000 }
const autoplay = Autoplay(options)


const SwiperComponent = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay]);


  return (
    <div ref={emblaRef} className={style.embla}>
      <div className={`${style.embla__container} ${style.slide_container}`}>
        {swiperSlides.map(element =>
            <div className={style.embla__slide}>
              <img className="image1" alt="" src={element.slide} />
              <div className={style.slide_content}>
                <p className={style.slide_content_subtitle}>{element.subtitle}</p>
                <h2 className={style.slide_content_title}>{element.title}</h2>
                <button className={style.slide_content_link}>SHOP NOW!</button>
              </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default SwiperComponent;
