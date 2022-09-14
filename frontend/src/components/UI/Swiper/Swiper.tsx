import React from "react";

import style from "./Swiper.module.scss";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { NavLink } from "react-router-dom";
import { GB_ROUTES } from "../../../utils/const";
import {swiperSlides} from "../../../utils/swiper";



const SwiperComponent = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: any;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 6000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div ref={sliderRef} className={`keen-slider ${style.swiper}`}>
      {swiperSlides.map(el =>
          <div className={`${style.slide_container} keen-slider__slide`} style={el.style}>
            <div className={style.slide_content}>
              <p className={style["slide_content-subtitle"]}>{el.subtitle}</p>
              <h2 className={style["slide_content-title"]}>
                {el.title}
              </h2>
              <div>
                <NavLink className={style["slide_content-link"]} to={GB_ROUTES}>
                  Shop now!
                </NavLink>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default SwiperComponent;
