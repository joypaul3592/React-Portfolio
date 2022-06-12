import React from 'react';
import { TbBoxMultiple1, TbBoxMultiple2, TbBoxMultiple3 } from "react-icons/tb";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
const Overview = () => {
    return (
        <div className=' lg:flex w-full  pb-16 md:pb-0'>
            <div className='lg:w-[50%]  md:px-3 pb-16 lg:pb-0'>
                <div>
                    <h1 className=' text-2xl font-mono text-left flex items-center'><TbBoxMultiple1 className=' mr-3 text-orange-500 text-base' /> Personal Info</h1>
                    <hr className=' mb-8' />
                    <div className=' md:flex justify-between'>
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
                        <hr className=' md:h-28 md:w-[1px] my-6 md:my-0 bg-gray-400' />
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
                    <h1 className=' text-2xl font-mono text-left flex items-center'><TbBoxMultiple2 className=' mr-3 text-orange-500 text-base' /> Social Info</h1>
                    <hr className=' mb-8' />

                    <div className=' md:flex items-center justify-around'>
                        <a href="https://www.facebook.com/endless.wer/" target="_blank">
                            <div className='py-1 px-4 my-4 md:my-0 rounded-md border border-orange-500 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white cursor-pointer'>
                                <FaFacebookF className=' mr-2' /> Facebook
                            </div>
                        </a>
                        <a href="https://github.com/joypaul3592" target='_blank'>
                            <div className='py-1 px-4 my-4 md:my-0 rounded-md border border-orange-500 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white cursor-pointer'>
                                <AiFillGithub className=' mr-2' /> GitHub
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/joy-paul3592/" target='_blank'>
                            <div className='py-1 px-4 my-4 md:my-0 rounded-md border border-orange-500 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white cursor-pointer'>
                                <FaLinkedinIn className=' mr-2' /> Linkedin
                            </div>
                        </a>
                    </div>

                </div>
            </div>
            <div className=' lg:w-[50%]  lg:px-8 md:px-5'>
                <h1 className=' text-2xl font-mono text-left flex items-center'><TbBoxMultiple3 className='text-orange-500 mr-3 text-base' /> Overview</h1>
                <hr className=' mb-8' />
                <p className=' text-justify mb-2 text-sm'>My name is Joy Paul and I am an ambitious Frontend Developer.
                </p>
                <p className=' text-justify mb-2 text-sm'>
                    My target is to build things following the latest trend and technologies. And definitely my other primary goal is to find solutions for the problems. Grasp for limitless learning brought me to web programming. Because I love exploring new things and in web development there is no end of learning. Currently, I am learning NextJS and also have a thirst for learning GraphQL and Redux.
                </p>
                <p className=' text-justify text-sm'>
                    Currently, I am looking for an opportunity as a frontend developer in my specialties. I am a team player and self-motivated, always a grasp for learning new stack. I am flexible to relocate as well.
                </p>
            </div>
        </div>
    );
};

export default Overview;