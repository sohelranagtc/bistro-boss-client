import React from 'react';

const MenuItem = ({ item }) => {
    const { name, price, image, recipe } = item
    return (
        <div className='flex justify-center items-center space-x-5'>
            <img src={image} style={{borderRadius : "0px 200px 200px 200px"}} className='w-[120px]' alt="" />
            <div>
                <h1 className='uppercase'>{name} -------</h1>
                <h1>{recipe}</h1>
            </div>
            <h1 className='text-yellow-500'>${price}</h1>
        </div>
    );
};

export default MenuItem;