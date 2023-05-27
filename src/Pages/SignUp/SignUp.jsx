import React, { useContext } from 'react';
import OthersSignIn from '../../Components/SectionTitle/OthersSignIn/OthersSignIn';
import loginImg from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {CreateUser} = useContext(AuthContext)
    const onSubmit = data => {
        CreateUser(data.email, data.password)
        .then(result=>{
            const user = result.user
            Swal.fire({
                title: 'Sign Up Successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            console.log(user)
        })
    }   
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="md:flex justify-center items-center">
                    <div className="md:w-1/2 w-full text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 w-full max-w-sm">
                        <div className="card-body">
                            <h1 className="text-2xl text-center font-bold">Please Sign Up!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" {...register("name", { required: true })} className="input input-bordered" />
                                {errors.name?.type === 'required' && <p className='text-red-600' role="alert">Name is required</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email?.type === 'required' && <p className='text-red-600' role="alert">Email is required</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" {...register("photo", { required: true })} className="input input-bordered" />
                                {errors.photo?.type === 'required' && <p className='text-red-600' role="alert">Photo URL is required</p>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" 
                                {...register("password", { 
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                    })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600' role="alert">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">Password must be 6 character</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600' role="alert">Password must be less than 20 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert">Password must be one number, one uppercase, one lowercase, one special character</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input reset={reset} className='btn btn-outline w-full bg-orange-200 uppercase flex border-0 border-b-4 text-lg mx-auto' type="submit" value="SIGN UP" />
                            </div>
                            <h1 className='text-center'>Already registered? <a className='text-orange-500'><Link to="/login">Go to login</Link></a></h1>
                            <OthersSignIn></OthersSignIn>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;