import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const OthersSignIn = () => {
    return (
        <div>
            <div className="divider">Or Sign In With</div>
            <div className='flex justify-center items-center gap-10'>
                <button className="btn btn-circle btn-outline">
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