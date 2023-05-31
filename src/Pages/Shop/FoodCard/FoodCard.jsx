import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, price, image, recipe, _id } = item
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCard = (item) => {
        const menuItem = { cartItemId: _id, name, price, image, email: user?.email }
        if (user && user?.email) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(menuItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${name} Food Item added Successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location }})
                }
            })
        }
    }
    return (
        <div>
            <div className="relative w-96 h-[31rem] bg-base-100 shadow-xl text-center pb-5">
                <figure><img src={image} className='w-[424px] h-[250px]' alt="Shoes" /></figure>
                <p className='absolute bg-black text-white right-0 -mt-56 mr-4 px-3'>${price}</p>
                <div className="card-body">
                    <h1 className='text-2xl font-semibold'>{name}</h1>
                    <p>{recipe}</p>
                </div>
                <button onClick={() => handleAddToCard(item)} className="btn btn-outline uppercase flex border-0 border-b-4 text-lg mx-auto bg-base-200">Add to card</button>
            </div>
        </div>
    );
};

export default FoodCard;