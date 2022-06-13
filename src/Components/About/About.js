import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className=' h-screen  md:pr-36 py-16 md:px-10 px-8 '>
                <div data-aos="fade-down" className=' relative'>
                    <h1 className=' absolute top-0 lg:left-[33%] md:left-[22%] md:text-8xl text-7xl font-bold opacity-5'>RESUME</h1>
                    <h2 className='pt-8 md:text-5xl text-4xl font-semibold uppercase font-mono'>About <span className=' text-orange-500'>ME</span></h2>
                </div>

                <div className='  md:flex items-center mt-4  py-16'>
                    <div data-aos="fade-down" className=' bg-gray-100 rounded-lg  md:h-96 md:w-28 px-2'>
                        <nav className='flex md:flex-col md:justify-center justify-between px-2 md:px-0 mb-12 md:mb-0 h-full'>
                            <NavLink
                                to={'overview'}
                                className={({ isActive }) => (` text-md font-medium my-6 ${isActive ? 'text-orange-500 border-b border-orange-500' : 'text-black'}`)}
                            >
                                <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-black'}`)}
                                >Personal</p>
                            </NavLink>


                            <NavLink
                                to={'education'}
                                className={({ isActive }) => (` text-md font-medium my-6  ${isActive ? 'text-orange-500  border-b border-orange-500' : 'text-black'}`)}
                            >
                                <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-black'}`)}
                                >Education</p>
                            </NavLink>

                            <NavLink
                                to={'skills'}
                                className={({ isActive }) => (` text-md font-medium my-6  ${isActive ? 'text-orange-500  border-b border-orange-500' : 'text-black'}`)}
                            >
                                <p className={({ isActive }) => (`  absolute mt-[4px] text-black text-sm font-semibold  context uppercase ${isActive ? 'text-orange-500' : 'text-black'}`)}
                                >Exprience</p>
                            </NavLink>
                        </nav>
                    </div>
                    <div className=' w-full md:px-6 px-3'>
                        <Outlet></Outlet>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;