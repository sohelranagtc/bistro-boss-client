import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ image, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={(image)}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero bg-fixed h-[700px]">
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-black bg-opacity-60 py-20 px-52">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{subtitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;