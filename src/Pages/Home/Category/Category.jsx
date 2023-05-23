import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle subtitle={"From 11:00am to 10:00pm"} title={"online order"}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-28"
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h1 className='text-center text-2xl text-white -mt-20 mb-5'>SALAD</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                    <h1 className='text-center text-2xl text-white -mt-20 mb-5'>PIZZAS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                    <h1 className='text-center text-2xl text-white -mt-20 mb-5'>SOUPS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                    <h1 className='text-center text-2xl text-white -mt-20 mb-5'>Deserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                    <h1 className='text-center text-2xl text-white -mt-20 mb-5'>SOUPS</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;