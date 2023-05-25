import React from 'react';
import Cover from '../../../Layout/Cover/Cover';
import MenuItem from '../../Home/PopularMenud/MenuItem';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const MenuCategory = ({items, image, title, subtitle}) => {
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
        </div>
    );
};

export default MenuCategory;