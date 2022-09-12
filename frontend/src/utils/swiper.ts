import slide1 from "../assets/img/Welcome/slide1.png";
import slide2 from "../assets/img/Welcome/slide2.png";
import slide3 from "../assets/img/Welcome/slide3.png";
import slide4 from "../assets/img/Welcome/slide4.png";



export const firstSlideStyle = {
    width: "100%",
    height: "100%",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundImage: `url(${slide1})`,
};

export const secondSlideStyle = {
    width: "100%",
    height: "100%",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundImage: `url(${slide2})`,
};

export const thirdSlideStyle = {
    width: "100%",
    height: "100%",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundImage: `url(${slide3})`,
};

export const fourthSlideStyle = {
    width: "100%",
    height: "100%",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundImage: `url(${slide4})`,
};

export const swiperSlides = [
    {
        id: 1,
        subtitle: "In Stock Versatility",
        title: 'OTC 9009 fits all!',
        style: firstSlideStyle
    },
    {
        id: 2,
        subtitle: "CRP C64 R2 is live!",
        title: 'The Latest in Hammerworks\' Line up',
        style: secondSlideStyle
    },
    {
        id: 3,
        subtitle: "Our Pre-Orders give you early access to extras!",
        title: 'Miss out on a set?',
        style: thirdSlideStyle
    },
    {
        id: 4,
        subtitle: "MW Fuyu is live!",
        title: 'A BEAUTIFUL JAPANESE Winter',
        style: fourthSlideStyle
    },

]