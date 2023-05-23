import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews)

    return (
        <div>
            <SectionTitle
                subtitle="What Our Clients Say"
                title="Testimonials"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='flex flex-col justify-center items-center mx-24 mb-10 text-center '>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='text-8xl my-10'><FaQuoteLeft></FaQuoteLeft></p>
                            <p className=''>{review.details}</p>
                            <h1 className='text-2xl font-semibold text-orange-400'>{review.name}</h1>
                        </div>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;