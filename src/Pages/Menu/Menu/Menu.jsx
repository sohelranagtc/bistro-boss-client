import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Layout/Cover/Cover';
import img from '../../../../src/assets/menu/banner3.jpg'
import MenuCategory from './MenuCategory';
import useMenu from '../../../Hooks/useMenu';

import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Menu = () => {
    const [menu] = useMenu()
    const desert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover image={img} title="Our Menu" subtitle="Would u like to try a dish"></Cover>
            <SectionTitle title="Todays offer" subtitle="Don't miss" ></SectionTitle>

            <MenuCategory items={offered} ></MenuCategory>

            <MenuCategory 
            items={desert} 
            image={desertImg} 
            title="Deserts" 
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est obcaecati laudantium dicta facilis." 
            ></MenuCategory>

            <MenuCategory 
            items={pizza} 
            image={pizzaImg} 
            title="pizza" 
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est obcaecati laudantium dicta facilis." 
            ></MenuCategory>

            <MenuCategory 
            items={salad} 
            image={saladImg} 
            title="salad" 
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est obcaecati laudantium dicta facilis." 
            ></MenuCategory>

            <MenuCategory 
            items={soup} 
            image={soupImg} 
            title="soup" 
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est obcaecati laudantium dicta facilis." 
            ></MenuCategory>

        </div>
    );
};

export default Menu;