import React from 'react'
import Container from '../components/common/Container'
import { Blog } from '../data/blog'
import BlogCard from '../components/layout/BlogCard'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const Blogs = () => {
    return (
        <Container className='bg-primary py-10 px-20'>
            <h1 className="text-white text-center font-zen text-3xl md:text-3xl mb-8">
                Daily Blog
            </h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper">
                {
                    Blog.map((blog) => (
                        <SwiperSlide>
                            <BlogCard key={blog.id} {...blog} />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </Container>
    )
}

export default Blogs
