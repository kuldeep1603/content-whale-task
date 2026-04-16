import React from 'react';
import { TeamData } from '../data/team';
import TeamCard from '../components/layout/TeamCard';
import Container from '../components/common/Container';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';

const Team = () => {
    return (
        <Container className='bg-primary py-10 px-20 Team'>
            <h1 className="text-tertiary text-center font-zen text-3xl md:text-3xl mb-8">
                Meet The Team
            </h1>

            <div className="md:px-24">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
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
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper teamSwiper"
                >
                    {TeamData.map((team) => (
                        <SwiperSlide key={team.id}>
                            <TeamCard {...team} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
};

export default Team;