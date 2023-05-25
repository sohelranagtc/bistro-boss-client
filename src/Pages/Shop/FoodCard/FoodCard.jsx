import React from 'react';

const FoodCard = ({item}) => {
    const { name, price, image, recipe } = item
    return (
        <div>
            <div className="w-96 bg-base-100 shadow-xl text-center pb-5">
                <figure><img src={image} className='w-[424px] h-[250px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='text-2xl font-semibold'>{name}</h1>
                    <p>{recipe}</p>
                </div>
                <button className="btn btn-outline uppercase flex border-0 border-b-4 text-lg mx-auto bg-base-200">Add to card</button>
            </div>
        </div>
    );
};

export default FoodCard;