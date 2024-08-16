import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Testimonials = () => {
    const { review, setReview } = useState([]);
 
    // useEffect(() => {
    //     fetch('../../../../public/reviews.json')
    //         .then(res => res.json())
            
    // }, [setReview])



    return (
        <section>
            <SectionTitle
                heading={"Testimonilas"}
                subHeading={"What's our client say"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                {/* {
                    reviews.map(review => <SwiperSlide
                    key={review._id}
                    >Slide 1</SwiperSlide>)
                } */}
            </Swiper>
        </section>
    );
};

export default Testimonials;