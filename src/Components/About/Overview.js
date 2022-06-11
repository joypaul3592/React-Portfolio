import React from 'react';
import { TbBoxMultiple1, TbBoxMultiple2, TbBoxMultiple3 } from "react-icons/tb";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Overview = () => {
    return (
        <div className=' flex w-full '>
            <div className='w-[50%]  px-3 '>
                <div>
                    <h1 className=' text-2xl font-mono text-left flex items-center'><TbBoxMultiple1 className=' mr-3 text-orange-500 text-base' /> Personal Info</h1>
                    <hr className=' mb-8' />
                    <div className=' flex justify-between'>
                        <div className=' text-left'>
                            <h1 className=' text-sm mb-2 '>
                                Name: <span>Joy Paul</span>
                            </h1>
                            <h1 className=' text-sm mb-2 '>
                                Age: <span>22 Years</span>
                            </h1>
                            <h1 className=' text-sm mb-2 '>
                                languages: <span>Bangla, English</span>
                            </h1>
                        </div>
                        <hr className=' h-28 w-[1px] bg-gray-400' />
                        <div className=' text-left'>
                            <h1 className=' text-sm mb-2 '>
                                Mobile: <span>01732023548</span>
                            </h1>
                            <h1 className=' text-sm mb-2 '>
                                Email: <span>joypaul3592@gmail.com</span>
                            </h1>
                            <h1 className=' text-sm mb-2 '>
                                Address: <span>Barisal, Bangladesh</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <h1 className=' text-2xl font-mono text-left flex items-center'><TbBoxMultiple3 className=' mr-3 text-orange-500 text-base' /> Social Info</h1>
                    <hr className=' mb-8' />

                    <div className=' flex items-center justify-around'>
                        <div className='w-10 h-10 border border-orange-500 flex items-center justify-center rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white cursor-pointer'>
                            <FaFacebookF />
                        </div>
                        <div className='w-10 h-10 border border-orange-500 flex items-center justify-center rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white cursor-pointer'>
                            <AiFillInstagram />
                        </div>
                        <div className='w-10 h-10 border border-orange-500 flex items-center justify-center rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white cursor-pointer'>
                            <FaLinkedinIn />
                        </div>
                    </div>

                </div>
            </div>
            <div className=' w-[50%]  px-8'>
                <h1 className=' text-2xl font-mono text-left flex items-center'><TbBoxMultiple2 className='text-orange-500 mr-3 text-base' /> Overview</h1>
                <hr className=' mb-8' />
                <p className=' text-justify mb-2'>My name is MD Zillur Rahman and I am an ambitious Frontend Engineer based in Germany.
                </p>
                <p className=' text-justify mb-2'>
                    My target is to build things following the latest trend and technologies. And definitely my other primary goal is to find solutions for the problems. Grasp for limitless learning brought me to web programming. Because I love exploring new things and in web development there is no end of learning. Currently, I am learning NextJS and also have a thirst for learning GraphQL and Redux.
                </p>
                <p className=' text-justify'>
                    Currently, I am looking for an opportunity as a frontend developer in Germany to utilize my specialties. I am a team player and self-motivated, always a grasp for learning new stack. I am flexible to relocate as well.
                </p>
            </div>
        </div>
    );
};

export default Overview;