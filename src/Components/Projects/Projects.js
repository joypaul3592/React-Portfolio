import React from 'react';
import viticpng from '../../assest/vitic.png'
import cyclepng from '../../assest/Cycle.png'
import docpng from '../../assest/doc.png'
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { DiJavascript1, DiReact, DiMongodb } from "react-icons/di";

const Projects = () => {
    return (
        <div>
            <div className=' h-screen  md:pr-36 py-16 md:px-10 px-8 '>
                <div className=' relative'>
                    <h1 className=' absolute top-0 lg:left-[33%] md:left-[22%] md:text-8xl text-7xl font-bold opacity-5'>WORKS</h1>
                    <h2 className=' pt-8 md:text-5xl text-4xl font-semibold uppercase font-mono'>My <span className=' text-orange-500'>Projects</span></h2>
                </div>
                <div className=' lg:h-96 mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center  md:px-6  pb-32 md:pb-0'>
                    <div className=' shadow-lg pb-6'>
                        <div className=' box '>
                            <img src={viticpng} alt="image" />
                        </div>
                        <h1 className=' text-xl font-mono font-semibold text-left mt-2 ml-4'>Menufecture Website</h1>
                        <hr className=' mb-4 mx-4' />
                        <div className='px-4 mb-4'>
                            <p className=' text-sm text-justify'>This is a Electronics inventory management service website
                                and user manage their inventory. The Site features firebase authentication. User can sign in
                                Manage inventory.</p>
                        </div>
                        <div className=' flex justify-between items-center px-4'>
                            <a className=' py-[2px] px-2 border border-orange-500 rounded text-xs font-semibold' href="">Clint side</a>
                            <a className=' py-[2px] px-2 border border-orange-500 rounded text-xs font-semibold' href="">Server side</a>
                            <a className=' py-[2px] px-2 border border-orange-500 rounded text-xs font-semibold' href="">Live side</a>
                        </div>
                        <hr className=' mb-4 mx-4 mt-4' />
                        <div className='flex mt-6 px-4 justify-between items-center'>
                            <AiFillHtml5 className=' text-orange-500' />
                            <IoLogoCss3 className=' text-orange-500' />
                            <DiJavascript1 className=' text-orange-500' />
                            <DiReact className=' text-orange-500' />
                            <IoLogoFirebase className=' text-orange-500' />
                            <DiMongodb className=' text-orange-500' />
                            <IoLogoNodejs className=' text-orange-500' />
                        </div>
                    </div>

                    <div className=' shadow-lg pb-6'>
                        <div className=' box '>
                            <img src={cyclepng} alt="image" />
                        </div>
                        <h1 className=' text-xl font-mono font-semibold text-left mt-2 ml-4'>Inventory Website</h1>
                        <hr className=' mb-4 mx-4' />
                        <div className='px-4 mb-4'>
                            <p className=' text-sm text-justify'>This is a car warehouse management service website. The Site features firebase authentication. MongoDB database and Node Express server integrated with Front
                                End UI and CRUD operation implemented.</p>
                        </div>
                        <div className=' flex justify-between items-center px-4'>
                            <a className=' py-[2px] px-2 border border-orange-500 rounded text-xs font-semibold' href="">Clint side</a>
                            <a className=' py-[2px] px-2 border border-orange-500 rounded text-xs font-semibold' href="">Server side</a>
                            <a className=' py-[2px] px-2 border border-orange-500 rounded text-xs font-semibold' href="">Live side</a>
                        </div>
                        <hr className=' mb-4 mx-4 mt-4' />
                        <div className='flex mt-6 px-4 justify-between items-center'>
                            <AiFillHtml5 className=' text-orange-500' />
                            <IoLogoCss3 className=' text-orange-500' />
                            <DiJavascript1 className=' text-orange-500' />
                            <IoLogoFirebase className=' text-orange-500' />
                            <IoLogoNodejs className=' text-orange-500' />
                            <DiMongodb className=' text-orange-500' />
                            <DiReact className=' text-orange-500' />
                        </div>
                    </div>

                    <div className=' shadow-lg pb-6'>
                        <div className=' box '>
                            <img src={docpng} alt="image" />
                        </div>
                        <h1 className=' text-xl font-mono font-semibold text-left mt-2 ml-4'>Doctor Website</h1>
                        <hr className=' mb-4 mx-4' />
                        <div className='px-4 mb-4'>
                            <p className=' text-sm text-justify'>This is a Electronics inventory management service website
                                and user manage their inventory. The Site features firebase authentication. User can sign in
                                Manage inventory.</p>
                        </div>
                        <div className=' flex justify-between items-center px-4'>
                            <a className=' py-[2px] px-2 border border-orange-500 rounded text-xs font-semibold' href="">Clint side</a>
                            <a className=' py-[2px] px-2 border border-orange-500 rounded text-xs font-semibold' href="">Server side</a>
                            <a className=' py-[2px] px-2 border border-orange-500 rounded text-xs font-semibold' href="">Live side</a>
                        </div>
                        <hr className=' mb-4 mx-4 mt-4' />
                        <div className='flex mt-6 px-4 justify-between items-center'>
                            <AiFillHtml5 className=' text-orange-500' />
                            <IoLogoCss3 className=' text-orange-500' />
                            <DiJavascript1 className=' text-orange-500' />
                            <IoLogoNodejs className=' text-orange-500' />
                            <DiReact className=' text-orange-500' />
                            <DiMongodb className=' text-orange-500' />
                            <IoLogoFirebase className=' text-orange-500' />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;