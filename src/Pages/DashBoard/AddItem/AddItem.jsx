import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import {FaUtensils } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    // if you dont want to remove auto then delete expiration=600&
    // const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body : formData
        })
        .then(res=> res.json())
        .then(imagResponse=>{
            if(imagResponse.success){
                const imgURL = imagResponse.data.display_url
                const {recipe, name, price, category} = data
                const newItem = {recipe, name, price : parseFloat(price), category, image: imgURL}
                console.log(newItem)
                axiosSecure.post('/menu', newItem)
                .then(data =>{
                    console.log('after posting new men item')
                    if(data.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added Item Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    };

    console.log(img_hosting_token)

    return (
        <div className='w-full h-full'>
            <SectionTitle
                subtitle="What's new"
                title="Add an Item"
            ></SectionTitle>
            <form className='bg-slate-200 rounded-md p-10' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name" {...register("name", {required: true})} className="input input-bordered w-full" />
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", {required: true})} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>salad</option>
                            <option>dessert</option>
                            <option>pizza</option>
                            <option>drinks</option>
                            <option>soup</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl">Price*</span>
                        </label>
                        <input type="number" placeholder="Price" {...register("price", {required: true})} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='mt-5 '>
                    <span className="label-text text-xl">Recipe Details*</span>
                    <textarea placeholder="Recipe Details" {...register("recipe", {required: true})} className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <div>
                    <button><input type="file" {...register("image", {required: true})} className="mt-5 mb-5 file-input file-input-bordered w-full max-w-xs" /></button> <br />
                    <button type="submit" className="btn btn-outline" value="Add Item"> Add Item  <FaUtensils></FaUtensils></button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;