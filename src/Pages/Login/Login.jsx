import React, { useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const Login = () => {
const [disabled, setDisabled] = useState(true)
const  captchaMatch = useRef(null)
    useEffect(()=> {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
    }

    const handleCaptcha = () => {
        const user_captcha_value = captchaMatch.current.value 
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
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
                                <input type="text" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                < LoadCanvasTemplate />
                                <div className='flex items-center'>
                                <input type="text" placeholder="Input Captcha" ref={captchaMatch} className="input input-bordered" />
                                <button onClick={handleCaptcha} className='btn uppercase flex border-0 border-b-4 text-lg mx-auto'>OK</button>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className='btn btn-outline w-full bg-orange-200 uppercase flex border-0 border-b-4 text-lg mx-auto' type="submit" value="Login" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;