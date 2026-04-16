import Container from "../components/common/Container";
import Icon from "../components/common/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Services = () => {
    return (
        <Container className="bg-primary text-center py-16">
            <h1 className="text-white font-zen text-3xl md:text-4xl leading-snug">
                Counseling and Mental Health <br className="hidden md:block" /> Services Built for Real Life
            </h1>
            <p className="font-zen opacity-80 text-text-primary my-6 text-sm md:text-base">
                No two people heal the same way — our therapy and counseling is{" "}
                <br className="hidden md:block" /> shaped around you, not the other way
                around.
            </p>

            <div className="hidden md:block">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    <div className="">
                        <img src="/assets/images/services/indiviual.png" className="w-full h-auto" alt="" />
                    </div>
                    <div className="">
                        <img src="/assets/images/services/grp.png" className="w-full h-auto" alt="" />
                    </div>
                    <div className="">
                        <img src="/assets/images/services/couples.png" className="w-full h-auto" alt="" />
                    </div>
                    <div className="">
                        <img src="/assets/images/services/areas.png" className="w-full h-auto" alt="" />
                    </div>
                    <div className="">
                        <img src="/assets/images/services/parents.png" className="w-full h-auto" alt="" />
                    </div>
                    <div className="">
                        <img src="/assets/images/services/workshops.png" className="w-full h-auto" alt="" />
                    </div>
                </div>
            </div>
            <div className="block md:hidden">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        540: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper">
                    <SwiperSlide>
                        <img src="/assets/images/services/indiviual.png" className="w-full h-auto" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/images/services/grp.png" className="w-full h-auto" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/images/services/couples.png" className="w-full h-auto" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/images/services/areas.png" className="w-full h-auto" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/images/services/parents.png" className="w-full h-auto" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/images/services/workshops.png" className="w-full h-auto" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </Container>
    );
};

export default Services;