import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart'


const MyCart = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item)=> item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className='flex justify-evenly gap-10 items-center'>
                <h3 className='text-3xl'>Total Items: {cart?.length}</h3>
                <h3 className='text-3xl'>Total Price: {total}</h3>
                <button className="btn bg-[#D1A054]">PAY</button>
            </div>
        </div>
    );
};

export default MyCart;