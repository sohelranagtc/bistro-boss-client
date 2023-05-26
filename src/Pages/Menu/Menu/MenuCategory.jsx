import React from 'react';
import Cover from '../../../Layout/Cover/Cover';
import MenuItem from '../../Home/PopularMenud/MenuItem';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, image, title, subtitle }) => {
    return (
        <div className='space-y-10 space-x-10 mb-10'>
            {title && <Cover image={image} title={title} subtitle={subtitle}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mb-5'>
                {
                    items.map(item => <MenuItem
                        key={item.id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <Link to={`/shop/${title}`}><button className="btn btn-outline uppercase border-0 border-b-4 text-lg bg-base-200">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;