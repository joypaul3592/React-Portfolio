import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdMarkEmailUnread, MdContactPhone } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
const Contact = () => {
    return (
        <div>
            <div className=' h-screen  md:pr-36 py-16 md:px-10 px-8 '>
                <div className=' relative'>
                    <h1 className=' absolute top-0 lg:left-[33%] md:left-[22%] md:text-8xl text-7xl font-bold opacity-5'>Contact</h1>
                    <h2 className=' pt-8 md:text-5xl text-4xl font-semibold uppercase font-mono'>Contact <span className=' text-orange-500'>ME</span></h2>
                </div>

                <div className='  lg:flex items-center justify-between mt-16  pb-36 lg:pb-0'>
                    <div className='  px-2 md:w-[35%] text-left mb-12 lg:mb-0'>
                        <h1 className=' text-2xl font-mono text-gray-600'>DON'T BE SHY<span className=' text-orange-500'>!</span></h1>
                        <p className=' text-sm text-justify text-gray-400 my-4'>Feel free to get in touch with me. I am looking for a job opportunity to utilize my skills. I am a fast learner andready to relocate. I would be grateful if you take a look at my work and contact me if you think I am a good fit.</p>
                        <div className=' pt-8'>
                            <div className=' flex items-center  mb-4'>
                                <div className=' pl-0 p-4'>
                                    <FaHome className=' text-4xl text-orange-500' />
                                </div>
                                <div className='ml-3'>
                                    <p className=' text-lg font-mono text-gray-800'>ADDRESS POINT</p>
                                    <h2 className=' text-sm font-mono text-gray-600'>Town Jainkati, Patuakhali, Bangladesh.</h2>
                                </div>
                            </div>

                            <div className=' flex items-center  mb-4'>
                                <div className=' pl-0 p-4'>
                                    <MdMarkEmailUnread className=' text-4xl text-orange-500' />
                                </div>
                                <div className='ml-3'>
                                    <p className=' text-lg font-mono text-gray-800'>Email Me</p>
                                    <h2 className=' text-sm font-mono text-gray-600'>joypaul3592@gmail.com</h2>
                                </div>
                            </div>

                            <div className=' flex items-center mb-4'>
                                <div className='  p-4 pl-0'>
                                    <MdContactPhone className=' text-4xl text-orange-500' />
                                </div>
                                <div className='ml-3'>
                                    <p className=' text-lg font-mono text-gray-800'>Call Me</p>
                                    <h2 className=' text-sm font-mono text-gray-600'>01732023548</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='  md:w-[63%] md:px-8'>
                        <form >
                            <div className=' w-full  flex items-center justify-between mb-6'>
                                <input className='w-[48%] py-2 px-2 text-sm font-mono bg-transparent border border-orange-500 rounded-md' type="text" placeholder='Your Name' required />
                                <input className='w-[48%] py-2 px-2 text-sm font-mono bg-transparent border border-orange-500 rounded-md' type="email" placeholder='Your Email' required />
                            </div>
                            <input className='w-full py-2 px-2 text-sm font-mono bg-transparent border border-orange-500 rounded-md mb-6' type="text" placeholder='Your Subject' required />
                            <textarea className=' w-full text-sm font-mono bg-transparent border border-orange-500 rounded-md mb-6' name="message" id="message" placeholder=' Your Message' rows="10"></textarea>

                            <div className=' w-40 mx-auto rounded-md flex items-center relative border border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 '>
                                <input className=' py-2 w-full' type="submit" value="Send" />
                                <IoIosSend className=' absolute right-2 top-3  animate-bounce text-2xl' />
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Contact;