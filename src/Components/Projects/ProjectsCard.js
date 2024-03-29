import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { DiJavascript1, DiReact, DiMongodb } from "react-icons/di";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { FiArrowLeftCircle } from "react-icons/fi";

const ProjectsCard = () => {
    const { id } = useParams();
    console.log(id);

    const newId = parseFloat(id) - 1
    console.log(newId)
    const naviget = useNavigate();

    const [project, setProject] = useState([]);
    console.log('kire vai');
    useEffect(() => {
        fetch('../Projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProject(data)
            })
    }, [project])

    console.log(project);
    console.log(project[newId]);

    return (
        <div className=' h-screen mx-w-7xl mx-auto lg:pt-24 pt-12 px-8 mb-24 md:mb-0'>
            <button data-aos="fade-right" onClick={() => naviget(-1)} className='py-1 px-3  border-orange-500 border rounded font-sm font-semibold flex items-center justify-between'> <FiArrowLeftCircle className='w-5 text-orange-500 animate-bounce mr-4 mt-2'></FiArrowLeftCircle>Go Back</button>
            <div className=' lg:w-2/4 md:w-8/12 w-full mt-5 lg:mt-0 pb-8 lg:pb-0 mx-auto'>
                <div data-aos="zoom-in-down" className=' rounded shadow-lg pb-6'>
                    <div className=' box '>
                        <img src={project[newId]?.img} alt="image" />
                    </div>
                    <h1 className=' text-xl font-mono font-semibold text-left mt-2 ml-4'>{project[newId]?.name}</h1>
                    <hr className=' mb-4 mx-4' />
                    <div className='px-4 mb-6'>
                        <ul className='mb-4'>
                            {project[newId]?.details?.map(p => <div className=' flex mb-3 gap-2'><VscDebugBreakpointLogUnverified className='text-xl w-10 text-orange-500  mr-2 ' /><p className=' w-11/12 text-left'>{p}</p></div>)}
                        </ul>
                    </div>
                    <div className=' flex justify-between items-center px-4'>
                        <a className=' w-[47%]  py-1.5 px-2 border border-orange-500 rounded text-xs font-semibold' href={project[newId]?.clientSide} target='_blank'>Client side</a>
                        <a className=' w-[47%]  py-1.5 px-2 border border-orange-500 rounded text-xs font-semibold' href={project[newId]?.live} target='_blank'>Live side</a>
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
            </div>
        </div>
        // <div>
        //     <h1>{project[newId]?.img}</h1>
        // </div>
    );
};

export default ProjectsCard;





