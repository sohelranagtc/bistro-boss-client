import React from 'react';

const SectionTitle = ({title, subtitle}) => {
    return (
        <div className='mx-auto md:w-4/12 my-14 text-center'>
            <h1 className='text-yellow-500 font-semibold text-lg mb-2'>--- {subtitle} ---</h1>
            <h1 className='border-y-4 text-3xl uppercase font-semibold py-3'>{title}</h1>
        </div>
    );
};

export default SectionTitle;