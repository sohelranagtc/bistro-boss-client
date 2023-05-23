import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import "./FetauredItem.css"
const FeaturedItem = () => {
    return (
        <div className='featured-Item bg-fixed my-10 pb-20 '>
            <div className='bg-black bg-opacity-40 -mb-20'>
                <SectionTitle
                    subtitle="Check It Out"
                    title="From Our Menu"
                ></SectionTitle>
                <div className='md:flex pl-16 pr-10 pb-20 justify-center items-center gap-x-5 text-white'>
                    <img src={featured} className='w-[648px] h-[400]' alt="" />
                    <div className='gap-5'>
                        <p className='text-xl'>March 20, 2023</p>
                        <h1 className='text-xl'>WHERE CAN I GET SOME?</h1>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline uppercase flex border-0 border-b-4 text-lg bg-base-200">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;