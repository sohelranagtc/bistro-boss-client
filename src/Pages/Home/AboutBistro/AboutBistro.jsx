import React from 'react';
import about from '../../../assets/home/chef-service.jpg'

const AboutBistro = () => {
    return (
        <div className="hero mb-24">
            <img src={about} alt="" />
            <div className="text-center text-neutral-content bg-black bg-opacity-50 md:ml-10 md:mr-10 rounded-md md:p-10">
                <div className="">
                    <h1 className="md:mb-5 md:text-5xl font-bold">BISTRO BOSS</h1>
                    <p className="md:mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutBistro;