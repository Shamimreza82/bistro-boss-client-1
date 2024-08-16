import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/salad-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import SectionTitle from '../../../components/SectionTitle';
import Button from '../../../components/Button';



const Menu = () => {

    const [menu] = useMenu()
    console.log(menu);
    const offered = menu.filter(item => item.category === 'offered')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')



    return (
        <div>
            <Helmet>
                <title>Bistro Boss </title>
            </Helmet>
            <Cover manuImg={menuImg} title={"our Menu"}></Cover>
            <SectionTitle subHeading={"Dont Miss"} heading={"Todays Offers"}></SectionTitle>
            <div className='lg:grid grid-cols-2'>
                {
                    offered.map(item=> <MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <Button name={"ORDER YOUR FAVOURITE FOOD"}></Button>
            <Cover manuImg={menuImg} title={"our Menu"}></Cover>

           
        </div>
    );
};

export default Menu;