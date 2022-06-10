import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnnotationIcon, BriefcaseIcon, DocumentTextIcon, HomeIcon, UserIcon } from '@heroicons/react/solid'
import './Navbar.css'
import { FaFacebook, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>

            <div className=' md:h-screen w-full  md:w-40 fixed z-50  md:absolute md:top-0 md:right-0 bottom-0 flex md:flex-col justify-center '>


                <div className=' w-full  md:flex pr-12 justify-end hidden animate-bounce '>
                    <a href="https://github.com/joypaul3592" target="_blank">
                        <FaGithub className=' text-sky-900 hover:text-orange-500' />
                    </a>
                </div>



                <div className=' w-full hidden md:flex pr-14 justify-end mb-8 mt-3'>
                    <hr className=' h-32 w w-[1px] bg-gray-600 ' />
                </div>

                <nav className='w-full bg-orange-500 md:bg-inherit pt-6 md:pt-0   flex md:flex-col md:items-end md:pr-10 justify-around'>
                    <NavLink
                        to={'blog'}
                        className={({ isActive }) => (` text-md font-medium mb-6  bg-sky-900  rounded-3xl ${isActive ? 'text-white' : 'text-white'}`)}
                    >
                        <div className='home '>
                            <p className=' absolute mt-[4px] text-white font-mono text-md hidden text'>Home</p>
                            <div className='h-8 w-8 bg-sky-900 flex justify-center items-center rounded-full transition-all'>
                                <HomeIcon className="h-4 w-4 text-white" />
                            </div>
                        </div>
                    </NavLink>

                    <NavLink
                        to={'blog'}
                        className={({ isActive }) => (` text-md font-medium mb-6  bg-sky-900  rounded-3xl ${isActive ? 'text-white' : 'text-white'}`)}
                    >
                        <div className='home '>
                            <p className=' absolute mt-[4px] text-white font-mono text-md hidden text'>About</p>
                            <div className='h-8 w-8 bg-sky-900 flex justify-center items-center rounded-full transition-all'>
                                <UserIcon className="h-4 w-4 text-white" />
                            </div>
                        </div>
                    </NavLink>


                    <NavLink
                        to={'blog'}
                        className={({ isActive }) => (` text-md font-medium mb-6  bg-sky-900  rounded-3xl ${isActive ? 'text-white' : 'text-white'}`)}
                    >
                        <div className='home '>
                            <p className=' absolute mt-[4px] text-white font-mono text-md hidden PortFoliotext'>PortFolio</p>
                            <div className='h-8 w-8 bg-sky-900 flex justify-center items-center rounded-full transition-all'>
                                <BriefcaseIcon className="h-4 w-4 text-white" />
                            </div>
                        </div>
                    </NavLink>

                    <NavLink
                        to={'blog'}
                        className={({ isActive }) => (` text-md font-medium mb-6  bg-sky-900  rounded-3xl ${isActive ? 'text-white' : 'text-white'}`)}
                    >
                        <div className='home '>
                            <p className=' absolute mt-[4px] text-white font-mono text-md hidden context'>Contact</p>
                            <div className='h-8 w-8 bg-sky-900 flex justify-center items-center rounded-full transition-all'>
                                <DocumentTextIcon className="h-4 w-4 text-white" />
                            </div>
                        </div>
                    </NavLink>


                    <NavLink
                        to={'blog'}
                        className={({ isActive }) => (` text-md font-medium mb-6 md:mb-0  bg-sky-900  rounded-3xl ${isActive ? 'text-white' : 'text-white'}`)}
                    >
                        <div className='home '>
                            <p className=' absolute mt-[4px] text-white font-mono text-md hidden context'>Blog</p>
                            <div className='h-8 w-8 bg-sky-900 flex justify-center items-center rounded-full transition-all'>
                                <AnnotationIcon className="h-4 w-4 text-white" />
                            </div>
                        </div>
                    </NavLink>

                </nav>

                <div className=' w-full hidden md:flex pr-14 justify-end mt-8 mb-3'>
                    <hr className=' h-32 w-[1px] bg-gray-600 ' />
                </div>

                <div className='animate-bounce  w-full hidden md:flex pr-12 justify-end '>
                    <a href="https://www.facebook.com/endless.wer/" target="_blank">
                        <FaFacebook className=' text-sky-900 hover:text-orange-500' />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;