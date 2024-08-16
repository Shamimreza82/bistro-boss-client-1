import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopulerManu = () => {

    const [menu] = useMenu()
    const populer = menu.filter(item => item.category === 'popular')
   

    return (
        <section>
            <SectionTitle heading={"From our menu"} subHeading={"Populer Items"}></SectionTitle>

            <div className='lg:grid grid-cols-2'>
                {
                    populer.map(item=> <MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopulerManu;