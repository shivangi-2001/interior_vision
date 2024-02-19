import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import '../css/slider.css'

import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={photo1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photo2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photo3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photo4} alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
