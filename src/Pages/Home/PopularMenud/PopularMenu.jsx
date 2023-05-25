import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from './MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className='mb-10'>
            <SectionTitle
                subtitle="From Our Menu"
                title="From Our Menu"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mb-5'>
                {
                    popular.map(item => <MenuItem
                    key={item.id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline uppercase flex border-0 border-b-4 text-lg mx-auto">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;