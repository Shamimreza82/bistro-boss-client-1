import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navber from '../pages/Shared/Navber/Navber';
import Banner from '../pages/Home/Banner/Banner';
import Category from '../pages/Home/Category/Category';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Category></Category>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;