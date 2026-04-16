import React from 'react'
import Container from '../components/common/Container'
import TestimonialsCard from '../components/layout/TestimonialsCard'
import { testimonialsData } from '../data/testimonialsData'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
const Testimonials = () => {
    return (
        <Container className='bg-text-primary py-10 Team'>
            <h1 className="text-text-secondary text-center font-zen text-2xl md:text-3xl mb-8">
                Real People, Real Shifts in Therapy
                <br className="hidden lg:block" />
                and Counseling
            </h1>

            <div className="md:px-24">
                <Swiper
                    slidesPerView={3}
                    navigation={true}
                    modules={[Navigation]}
                    spaceBetween={20}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        540: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper mt-5">
                    {
                        testimonialsData.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <TestimonialsCard key={testimonial.id} {...testimonial} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </Container>
    )
}

export default Testimonials
