import React from 'react';

const Trusted = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-64 w-full'>
            <div className='flex items-center justify-center'>
                <h3 className='text-white text-5xl mt-9 font-bold'>Trusted by Millions, Built for You</h3>
            </div>

            <div className='flex text-white justify-center gap-40 mt-7'>

                <div className='flex flex-col justify-center items-center text-center'>
                    <span>Total Downloads</span>
                    <h3 className='font-bold text-4xl mt-1.5'>29.6M</h3>
                    <p>21% more than last month</p>
                </div>

                <div className='flex flex-col justify-center items-center text-center'>
                    <span>Total Reviews</span>
                    <h3 className='font-bold text-4xl mt-1.5'>906K</h3>
                    <p>46% more than last month</p>
                </div>

                <div className='flex flex-col justify-center items-center text-center'>
                    <span>Active Apps</span>
                    <h3 className='font-bold text-4xl mt-1.5'>132+</h3>
                    <p className='mt-4'>46% more than last month</p>
                </div>

            </div>
        </div>
    );
};

export default Trusted;