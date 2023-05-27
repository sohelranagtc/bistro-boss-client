import React, { useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import OthersSignIn from '../../Components/SectionTitle/OthersSignIn/OthersSignIn';
import Swal from 'sweetalert2';


const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const captchaMatch = useRef(null)
    const { LogIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        LogIn(email, password)
            .then(result => {
                const user = result.user
                Swal.fire({
                    title: 'Login Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                console.log(user)
                navigate(from, { replace: true })
            })
    }

    const handleCaptcha = e => {
        const user_captcha_value = e.target.value
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="md:flex justify-center items-center">
                    <div className="md:w-1/2 w-full text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <form onSubmit={handleLogIn} className="md:w-1/2 w-full max-w-sm">
                        <div className="card-body">
                            <h1 className="text-2xl text-center font-bold">Please Login!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                < LoadCanvasTemplate />
                                <div className='form-control'>
                                    <input type="text" onBlur={handleCaptcha} placeholder="Input Captcha" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className='btn btn-outline w-full bg-orange-200 uppercase flex border-0 border-b-4 text-lg mx-auto' type="submit" value="Login" />
                            </div>
                            <h1 className='text-center'>New here? <a className='text-orange-500'><Link to="/signup">Create a New Account</Link></a></h1>
                            <OthersSignIn></OthersSignIn>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Login;