// import React from "react";   
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"
import { Autoplay, Navigation, Pagination } from "swiper";



import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";



import "./HeroSection.css";
import SliderDesgine from "./sliderDesgine/SliderDesgine";
import image1 from '../../../assets/image/pexels-alain-frechette-2730355.jpg'
import image2 from '../../../assets/image/pexels-cottonbro-3401897.jpg'
import image3 from '../../../assets/image/pexels-pixabay-207305.jpg'

 const sliderdata = [
   {
     image: image1,
     title: "Have a wonderfully Day",
     des: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
   },
   {
     image: image2,
     title: "Have a Nice Day",
     dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
   },
   {
     image: image3,
     title: "Have a Great Day",
     dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled itLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
   },
 ];


const HeroSection = () => {
   
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderDesgine
            text={sliderdata[0].title}
            img={sliderdata[1].image}
            dis={sliderdata[2].dis}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderDesgine
            text={sliderdata[0].title}
            img={sliderdata[2].image}
            dis={sliderdata[2].dis}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderDesgine
            text={sliderdata[0].title}
            img={sliderdata[0].image}
            dis={sliderdata[2].dis}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
