import React from 'react';
import ShopTabs from './ShopTabs';
import Cover from '../../Layout/Cover/Cover';
import coverImage from "../../assets/shop/banner2.jpg"
const Shop = () => {
    return (
        <div>
            <Cover image={coverImage} title="Our Shop" subtitle="Would you like to try it"></Cover>
            <ShopTabs></ShopTabs>
            
        </div>
    );
};

export default Shop;