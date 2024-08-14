import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';



const Category = () => {
    return (
        <>
            <section>
                <SectionTitle
                    heading={"ORDER ONLINE"}
                    subHeading={"--From 1.00 am to 10.00 pm--"}
                ></SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slider1} alt="" />
                        <p className='lg:flex sm:text-sm justify-center -mt-20 '>
                            SALADS
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="" />
                        <p className='lg:flex sm:text-sm justify-center -mt-20 '>
                            SALADS
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="" />
                        <p className='lg:flex sm:text-sm justify-center -mt-20 '>
                            SALADS
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider4} alt="" />
                        <p className='lg:flex sm:text-sm justify-center -mt-20 '>
                            SALADS
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} alt="" />
                        <p className='lg:flex sm:text-sm justify-center -mt-20 '>
                            SALADS
                        </p>
                    </SwiperSlide>

                </Swiper>
            </section>
        </>
    );
};

export default Category;