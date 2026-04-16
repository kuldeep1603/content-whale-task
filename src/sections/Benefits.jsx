import React from "react";
import Container from "../components/common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

// Import Swiper styles

import Button from "../components/common/Button";
import "swiper/css";
import 'swiper/css/pagination';

const Benefits = () => {
    return (
        <>
            <Container className="bg-primary benefits py-10 px-20 hidden md:block">
                <h1 className="text-white text-center font-zen text-3xl md:text-3xl ">
                    The Real Benefits of Therapy and Counseling With Us
                </h1>
                <p className="font-zen text-center opacity-70 text-text-primary mt-4 mb-10 text-sm md:text-[14px]">
                    Most counseling and mental health services treat symptoms, we work on
                    the person carrying them.
                </p>

                <Swiper pagination={true} modules={[Pagination]} className="mySwiper mt-10 ">
                    <SwiperSlide className="bg-benefits-bg-1 benefits-slider bg-cover bg-bottom bg-no-repeat">
                        <div className="px-10">
                            <p className="text-white font-zen text-3xl font-semibold">
                                You Choose Who You
                                <br /> Work With
                            </p>
                            <p className="text-white my-4 font-zen text-[13px] font-normal opacity-80">
                                Every therapist at The Therapy Park is listed with <br /> their
                                specialisation and availability, so you walk in <br /> informed,
                                not assigned.
                            </p>
                            <Button className="bg-secondary d-block px-3 py-2 text-[14px]">Book a Session</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-benefits-bg-2 benefits-slider bg-cover bg-bottom bg-no-repeat">
                        <div className="px-10">
                            <p className="text-white font-zen text-3xl font-semibold">
                                No Session Follows
                                <br /> a Script
                            </p>
                            <p className="text-white my-4 font-zen text-[13px] font-normal opacity-80">
                                Our therapy and counseling adapts to what you bring <br /> into the room, not the other way around.
                            </p>
                            <Button className="bg-secondary d-block px-3 py-2 text-[14px]">Book a Session</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-benefits-bg-3 benefits-slider bg-cover bg-bottom bg-no-repeat">
                        <div className="px-10">
                            <p className="text-white font-zen text-3xl font-semibold">
                                Your Identity Is Never a <br /> Problem Here
                            </p>
                            <p className="text-white my-4 font-zen text-[13px] font-normal opacity-80">
                                Queer, neurodivergent, from any caste or background <br /> — our counseling and mental health services are built <br /> to hold every version of who you are, without exception.
                            </p>
                            <Button className="bg-secondary d-block px-3 py-2 text-[14px]">Book a Session</Button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-benefits-bg-4 benefits-slider bg-cover bg-bottom bg-no-repeat">
                        <div className="px-10">
                            <p className="text-white font-zen text-3xl font-semibold">
                                Online or In-Person, <br /> Same Standard
                            </p>
                            <p className="text-white my-4 font-zen text-[13px] font-normal opacity-80">
                                Whether you book an online mental health counseling <br /> session from another city or walk into Kolkata, the <br /> quality of care stays identical, same <br />modalities, same practitioners, same commitment.
                            </p>
                            <Button className="bg-secondary d-block px-3 py-2 text-[14px]">Book a Session</Button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
            <Container className="bg-primary benefits-mobile py-10 px-20 block md:hidden">
                <h1 className="text-white text-center font-zen text-3xl md:text-3xl ">
                    Benefits of working <br className="" /> with us
                </h1>
                <p className="font-zen text-center opacity-70 text-text-primary mt-4 mb-10 text-sm md:text-[14px]">
                    At Therapy Park, we equip our practitioners with <br className="sm:block hidden" /> tools  for personal  and professional<br className="sm:block hidden" />
                    growth through our  collective <span className="text-tertiary">Founder’s Anonymous</span>
                </p>

                <Swiper pagination={true} modules={[Pagination]} className="mySwiper mt-10 ">
                    {
                        [1, 2, 3].map((e) => {
                            return (
                                <SwiperSlide className="">
                                    <div className="px-10 justify-center items-center flex flex-col">
                                        <h1 className="text-white text-center font-zen text-2xl md:text-3xl ">
                                            Benefits 1
                                        </h1>
                                        <p className="text-white my-5 text-center opacity-90 font-zen text-[14px] font-normal">
                                            At Therapy Park, we equip our practitioners with tools <br className="sm:block hidden" />for personal and professional<br className="sm:block hidden" />
                                            growth through our collective
                                        </p>
                                        <Button className="bg-secondary d-block px-3 py-2 text-[14px]">Book a Session</Button>
                                        <img src="/public/assets/images/benefits/swing colored 1.png" className="w-full h-auto mt-20" alt="" />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }


                </Swiper>
            </Container>
        </>
    );
};

export default Benefits;
