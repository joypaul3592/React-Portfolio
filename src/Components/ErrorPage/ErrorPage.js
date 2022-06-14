import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/outline'
import ErrorSVG from '../../assest/Error.gif'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const naviget = useNavigate();
    return (
        <div className='max-w-7xl mx-auto pt-12 px-5'>
            <button onClick={() => naviget(-1)} className='py-2 px-10  bg-green-200 rounded font-xl font-semibold flex items-center justify-between'> <ArrowLeftIcon className='w-5 mr-4'></ArrowLeftIcon>Go Back</button>
            <img className=' mx-auto w-[60%] md:my-36 my-20' src={ErrorSVG} alt="" />
        </div>
    );
};

export default ErrorPage;