import Navber from "../../Shared/Navber/Navber";
import Category from "../Category/Category";
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import PopulerManu from "../PopulerManu/PopulerManu";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Category></Category>
            <PopulerManu></PopulerManu>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;