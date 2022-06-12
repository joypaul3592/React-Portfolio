import React from 'react';
import { TbBoxMultiple1, TbBoxMultiple2, TbBoxMultiple3 } from "react-icons/tb";
import { HiAcademicCap } from "react-icons/hi";

const Education = () => {
    return (
        <div className=' lg:flex w-full pb-16 md:pb-0'>
            <div className='lg:w-[50%]  md:px-3 pb-16 lg:pb-0'>
                <div>
                    <h1 className=' text-2xl font-mono text-left flex items-center'><TbBoxMultiple1 className=' mr-3 text-orange-500 text-base' />Academic</h1>
                    <hr className=' mb-8' />
                    <div className='flex mb-8'>
                        <div className='flex flex-col items-center w-[10%] mr-8'>
                            <div className=' w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center'>
                                <HiAcademicCap className=' text-orange-500' />
                            </div>
                            <hr className=' h-28 w-[1px] mt-[-1px] bg-gray-300' />
                        </div>
                        <div className=' text-left'>
                            <span className=' py-[2px] px-3 border-gray-300 border rounded-2xl text-sm font-mono font-semibold text-orange-500'>2015-2016</span>
                            <h1 className=' md:text-xl text-md mb-1 font-semibold uppercase mt-3'>SSC in Science</h1>
                            <hr className='mb-3' />
                            <p className=' text-justify text-sm'>I have completed my SSC in Science. Here i know about programming from ICT Book of SSC. and i feel interested in Programming.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='flex flex-col items-center w-[10%] mr-8'>
                            <div className=' w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center'>
                                <HiAcademicCap className=' text-orange-500' />
                            </div>
                            <hr className=' h-28 w-[1px] mt-[-1px] bg-gray-300' />
                        </div>
                        <div className=' text-left'>
                            <span className=' py-[2px] px-3 border-gray-300 border rounded-2xl text-sm font-mono font-semibold text-orange-500'>2016-2019</span>
                            <h1 className='md:text-xl text-md mb-1 font-semibold uppercase mt-3'>Diploma in MATS</h1>
                            <hr className='mb-3' />
                            <p className=' text-justify text-sm'>I have completed my diploma in Medical Science. After completiong my diploma,i feel interested in Programming. Then I Google it and learn about programming</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' lg:w-[50%]  lg:px-8  md:px-5'>
                <h1 className=' text-2xl font-mono text-left flex items-center'><TbBoxMultiple2 className='text-orange-500 mr-3 text-base' /> Course</h1>
                <hr className=' mb-8' />
                <div>
                    <div className='flex'>
                        <div className='flex flex-col items-center w-[10%] mr-8'>
                            <div className=' w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center'>
                                <HiAcademicCap className=' text-orange-500' />
                            </div>
                            <hr className=' h-32 w-[1px] mt-[-1px] bg-gray-300' />
                        </div>
                        <div className=' text-left'>
                            <span className=' py-[2px] px-3 border-gray-300 border rounded-2xl text-sm font-mono font-semibold text-orange-500'>2022-Present</span>
                            <h1 className=' md:text-xl text-md mb-1 font-semibold uppercase mt-3'>MERN stack Development</h1>
                            <hr className='mb-3' />
                            <p className=' text-justify text-sm'>I leanr about programming form Programmign-Hero. It is one of the most popular platfrom to learn programming in better way.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;