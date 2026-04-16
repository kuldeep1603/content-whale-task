import Container from "../components/common/Container";
import Icon from "../components/common/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { commitementData } from "../data/commitementData";
import { Pagination } from 'swiper/modules';

const Commitment = () => {
    return (
        <Container className="bg-white py-10 Commitment-section">
            <div className="flex items-center justify-center gap-4">
                {/* Left Decorative Curve */}
                <Icon
                    title="curve-left"
                    width="40px"
                />

                {/* Title */}
                <h2 className="font-playfair text-[#5C6559] text-2xl md:text-3xl font-medium tracking-wide">
                    Our Commitment
                </h2>

                {/* Right Decorative Curve */}
                <Icon
                    title="curve-right"
                    width="40px"
                />
            </div>
            <img src="/public/assets/images/Commitment/bg.png" alt="" className="hidden lg:block  w-full" />

            <div className="block lg:hidden">
                <Swiper
                    pagination={true} modules={[Pagination]}
                    slidesPerView={3}
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
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    className="mySwiper mt-5">
                    {
                        commitementData.map((commitement) => (
                            <SwiperSlide key={commitement.id}>
                                <div className="flex jus items-center justify-center flex-col">
                                    <Icon
                                        title={commitement.icon}
                                        width="80px"
                                        height="80px"
                                    />
                                    <p className="text-text-secondary mt-2 font-medium font-zen text-lg text-center">{commitement.title}</p>
                                </div>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </div>

        </Container>
    );
};

export default Commitment;