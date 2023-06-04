import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaUserShield, FaUtensils } from 'react-icons/fa';

const AddItem = () => {
    return (
        <div className='w-full ml-10'>
            <SectionTitle
                subtitle="What's new"
                title="Add an Item"
            ></SectionTitle>
            <form>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl">Category*</span>
                        </label>
                        <select className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Pizza</option>
                            <option>Drinks</option>
                            <option>Soups</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl">Price*</span>
                        </label>
                        <input type="number" placeholder="Price" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='mt-5 '>
                    <span className="label-text text-xl">Recipe Details*</span>
                    <textarea placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <div>
                    <button><input type="file" className="mt-5 mb-5 file-input file-input-bordered w-full max-w-xs" /></button> <br />
                    <button type="submit" className="btn btn-outline" value="Add Item"> Add Item  <FaUtensils></FaUtensils></button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;