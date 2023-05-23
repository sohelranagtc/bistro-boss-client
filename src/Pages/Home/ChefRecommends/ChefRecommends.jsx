import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import image1 from "../../../assets/menu/banner3.jpg"
import image2 from "../../../assets/menu/dessert-bg.jpeg"
import image3 from "../../../assets/menu/pizza-bg.jpg"
const ChefRecommends = () => {
    return (
        <section className='mb-10'>
            <SectionTitle
                subtitle="Should Try"
                title="Chef Recommends"
            ></SectionTitle>
            <div className='md:flex gap-x-10 gap-y-10'>
                <div className="w-96 bg-base-100 shadow-xl text-center pb-5">
                    <figure><img src={image1} className='w-[424px] h-[250px]' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h1 className='text-2xl font-semibold'>Caeser Salad</h1>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    </div>
                    <button className="btn btn-outline uppercase flex border-0 border-b-4 text-lg mx-auto bg-base-200">Add to card</button>
                </div>
                <div className="w-96 bg-base-100 shadow-xl text-center pb-5">
                    <figure><img src={image2} className='w-[424px] h-[250px]' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h1 className='text-2xl font-semibold'>Caeser Salad</h1>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    </div>
                    <button className="btn btn-outline uppercase flex border-0 border-b-4 text-lg mx-auto bg-base-200">Add to card</button>
                </div>
                <div className="w-96 bg-base-100 shadow-xl text-center pb-5">
                    <figure><img src={image3} className='w-[424px] h-[250px]' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h1 className='text-2xl font-semibold'>Caeser Salad</h1>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    </div>
                    <button className="btn btn-outline uppercase flex border-0 border-b-4 text-lg mx-auto bg-base-200">Add to card</button>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;