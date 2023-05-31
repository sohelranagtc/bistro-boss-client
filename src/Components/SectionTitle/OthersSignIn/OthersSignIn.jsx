import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const OthersSignIn = () => {
    const { signWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleSignWithGoogle = () => {
        signWithGoogle()
            .then(result => {
                const loggedGoogleUser = result.user
                console.log(loggedGoogleUser)
                const saveUser = { name: loggedGoogleUser.displayName, email: loggedGoogleUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(()=> {
                        navigate(from, { replace: true })
                    })
            })
            .then(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="divider">Or Sign In With</div>
            <div className='flex justify-center items-center gap-10'>
                <button onClick={handleSignWithGoogle} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-circle btn-outline">
                    <FaFacebook></FaFacebook>
                </button>
            </div>
        </div>
    );
};

export default OthersSignIn;