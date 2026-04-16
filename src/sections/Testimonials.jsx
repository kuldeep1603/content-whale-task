import React from 'react'
import Container from '../components/common/Container'
import TestimonialsCard from '../components/layout/TestimonialsCard'
import { testimonialsData } from '../data/testimonialsData'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import Icon from '../components/common/Icon';
const Testimonials = () => {
    return (
        <Container className='bg-text-primary py-10 Team testimonials'>
            <h1 className="text-text-secondary text-center font-zen text-2xl md:text-3xl mb-8">
                Real People, Real Shifts in Therapy
                <br className="hidden lg:block" />
                and Counseling
            </h1>

            <div className="md:px-24 relative ">
                <Swiper
                    slidesPerView={3}
                    navigation={true}
                    modules={[Navigation]}
                    spaceBetween={30}
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
                <Icon title="testimonial-img" classname='absoulte top-0 z-10 testimonial-img' width='70px' height='70px' />
            </div>
        </Container>
    )
}

export default Testimonials
