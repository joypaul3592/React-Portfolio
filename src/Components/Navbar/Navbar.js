import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnnotationIcon, BriefcaseIcon, DocumentTextIcon, HomeIcon, UserIcon } from '@heroicons/react/solid'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className=' h-screen w-40 bg-orange-200 absolute top-0 right-0 flex flex-col justify-center'>
                <nav className='w-full  flex flex-col items-end pr-10 '>
                    <NavLink
                        to={'blog'}
                        className={({ isActive }) => (` text-md font-medium mb-6  bg-green-400  rounded-3xl ${isActive ? 'text-purple-500' : 'text-black'}`)}
                    >
                        <div className='home '>
                            <p className=' absolute mt-[3px] text-black text-md hidden text'>Home</p>
                            <div className='h-8 w-8 bg-green-400 flex justify-center items-center rounded-full transition-all'>
                                <HomeIcon className="h-5 w-5 text-gray-800" />
                            </div>
                        </div>
                    </NavLink>

                    <NavLink
                        to={'blog'}
                        className={({ isActive }) => (` text-md font-medium mb-6  bg-green-400  rounded-3xl ${isActive ? 'text-purple-500' : 'text-black'}`)}
                    >
                        <div className='home '>
                            <p className=' absolute mt-[3px] text-black text-md hidden text'>About</p>
                            <div className='h-8 w-8 bg-green-400 flex justify-center items-center rounded-full transition-all'>
                                <UserIcon className="h-5 w-5 text-gray-800" />
                            </div>
                        </div>
                    </NavLink>


                    <NavLink
                        to={'blog'}
                        className={({ isActive }) => (` text-md font-medium mb-6  bg-green-400  rounded-3xl ${isActive ? 'text-purple-500' : 'text-black'}`)}
                    >
                        <div className='home '>
                            <p className=' absolute mt-[3px] text-black text-md hidden PortFoliotext'>PortFolio</p>
                            <div className='h-8 w-8 bg-green-400 flex justify-center items-center rounded-full transition-all'>
                                <BriefcaseIcon className="h-5 w-5 text-gray-800" />
                            </div>
                        </div>
                    </NavLink>

                    <NavLink
                        to={'blog'}
                        className={({ isActive }) => (` text-md font-medium mb-6  bg-green-400  rounded-3xl ${isActive ? 'text-purple-500' : 'text-black'}`)}
                    >
                        <div className='home '>
                            <p className=' absolute mt-[3px] text-black text-md hidden context'>Contact</p>
                            <div className='h-8 w-8 bg-green-400 flex justify-center items-center rounded-full transition-all'>
                                <DocumentTextIcon className="h-5 w-5 text-gray-800" />
                            </div>
                        </div>
                    </NavLink>

                    <NavLink
                        to={'blog'}
                        className={({ isActive }) => (` text-md font-medium   bg-green-400  rounded-3xl ${isActive ? 'text-purple-500' : 'text-black'}`)}
                    >
                        <div className='home '>
                            <p className=' absolute mt-[3px] text-black text-md hidden text'>Blog</p>
                            <div className='h-8 w-8 bg-green-400 flex justify-center items-center rounded-full transition-all'>
                                <AnnotationIcon className="h-5 w-5 text-gray-800" />
                            </div>
                        </div>
                    </NavLink>

                </nav>





            </div>
        </div>
    );
};

export default Navbar;