import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './sliderstyle.css'; 
import { initializeSwiper } from './sliderscript'; 
import sliderA from "../../assets/Images/sliderA.jpg";
import sliderB from "../../assets/Images/sliderB.jpg";
import sliderC from "../../assets/Images/sliderC.jpg";

function Slider() {
  useEffect(() => {
    const swiperInstance = initializeSwiper();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      effect="fade"
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="swiper-container"
    >
      <SwiperSlide>
        <img src={sliderA} alt="Welcome to Annotate AI" />
        <div className="overlay">
          <h1 className="animated-text">Welcome to Annotate AI</h1>
          <p className="animated-text">Revolutionizing Data Annotation</p>
          <p className="animated-text">Experience the future of data annotation with our cutting-edge AI technology. Accurate, efficient, and effortless.</p>
          <button className="btn" onClick={() => window.location.href='nextpage1.html'}>Learn More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderB} alt="Boost Your Productivity" />
        <div className="overlay">
          <h1 className="animated-text">Boost Your Productivity</h1>
          <p className="animated-text">Automate Tedious Tasks</p>
          <p className="animated-text">Annotate AI helps you automate repetitive annotation tasks, allowing you to focus on more important work.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderC} alt="Enhance Data Quality" />
        <div className="overlay">
          <h1 className="animated-text">Enhance Data Quality</h1>
          <p className="animated-text">Precision and Accuracy</p>
          <p className="animated-text">Leverage AI-powered tools to ensure your data annotations are precise and accurate, improving the overall quality of your datasets.</p>
        </div>
      </SwiperSlide>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}

export default Slider;
