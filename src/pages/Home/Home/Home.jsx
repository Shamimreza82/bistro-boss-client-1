
import Category from "../Category/Category";
import Banner from "../Banner/Banner";
import PopulerManu from "../PopulerManu/PopulerManu";
import Testimonials from "../Testimonial/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulerManu></PopulerManu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;