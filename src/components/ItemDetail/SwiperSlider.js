import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import './SwiperSlider.scss'

export const SwiperSlider = ({data}) => {
    const {image} = data
    return (
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]} 
                className='product'
            >
                <SwiperSlide>
                    <img src={`../assets/img/${image}`} className='image' alt='remera'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`../assets/img/medidas.webp`} className='image' alt='medidas'></img>
                </SwiperSlide>
                
            </Swiper>
    )
}
