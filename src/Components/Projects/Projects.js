import React, { useEffect, useState } from 'react';
import viticpng from '../../assest/vitic.png'
import cyclepng from '../../assest/Cycle.png'
import docpng from '../../assest/doc.png'

import ProjectsCard from './ProjectsCard';
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate()

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myProjects')
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setProjects(data.data)
            })
    }, [])





    return (
        <div>
            <div className=' h-screen  md:pr-36 py-16 md:px-10 px-8 '>
                <div data-aos="fade-down" className=' relative'>
                    <h1 className=' absolute top-0 lg:left-[33%] md:left-[22%] md:text-8xl text-7xl font-bold opacity-5'>WORKS</h1>
                    <h2 className=' pt-8 md:text-5xl text-4xl font-semibold uppercase font-mono'>My <span className=' text-orange-500'>Projects</span></h2>
                </div>
                <div data-aos="zoom-in" className=' lg:h-96 mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center  md:px-6   pb-32 md:pb-0'>

                    {
                        projects.map(project =>
                            <div data-aos="zoom-in-down" className=' rounded shadow-lg pb-6'>
                                <div className=' box '>
                                    <img src={project.img} alt="image" />
                                </div>
                                <h1 className=' text-xl font-mono font-semibold text-left mt-2 ml-4'>{project.name}</h1>
                                <hr className=' mb-4 mx-4' />
                                <div className='px-4 mb-4'>
                                    <p className=' text-sm text-justify'>{project.info}</p>
                                </div>
                                <div>
                                    <button onClick={() => navigate(`/projectsCard/${project._id}`)} className=' w-[90%]  py-[2px] px-2 border border-orange-500 rounded text-xs font-semibold'>Details</button>
                                </div>
                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Projects;