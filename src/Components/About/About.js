import { DocumentTextIcon } from '@heroicons/react/solid';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className=' h-screen  md:pr-36 py-16 md:px-10 px-8'>
                <div className=' relative'>
                    <h1 className=' absolute top-0 lg:left-[33%] md:left-[22%] text-8xl font-bold opacity-5'>RESUME</h1>
                    <h2 className=' pt-8 text-5xl font-semibold uppercase font-mono'>About <span className=' text-orange-500'>ME</span></h2>
                </div>

                <div className='  flex items-center mt-4'>
                    <div className=' bg-gray-300  h-96 w-28 pl-6  '>
                        <nav className='flex flex-col justify-center  h-full'>
                            <NavLink
                                to={'overview'}
                                className={({ isActive }) => (` text-md font-medium my-6  bg-sky-900  rounded-3xl ${isActive ? 'text-red-400' : 'text-white'}`)}
                            >
                                <p className=' absolute mt-[4px] text-black  text-base uppercase font-mono  context'>Overview</p>
                            </NavLink>

                            <NavLink
                                to={'education'}
                                className={({ isActive }) => (` text-md font-medium my-6  bg-sky-900  rounded-3xl ${isActive ? 'text-red-400' : 'text-white'}`)}
                            >
                                <p className=' absolute mt-[4px] text-black text-base font-mono context uppercase'>Education</p>
                            </NavLink>

                            <NavLink
                                to={'skills'}
                                className={({ isActive }) => (` text-md font-medium my-6  bg-sky-900  rounded-3xl ${isActive ? 'text-red-400' : 'text-white'}`)}
                            >
                                <p className=' absolute mt-[4px] text-black  text-base font-mono uppercase  context'>Skills</p>
                            </NavLink>
                        </nav>
                    </div>
                    <div className=' w-full px-6'>
                        <Outlet></Outlet>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;