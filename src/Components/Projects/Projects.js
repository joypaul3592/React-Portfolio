import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate()

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./Projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data)
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
                                <div className=' box'>
                                    <img src={project.img} alt="image" />
                                </div>
                                <div className=' flex items-center justify-between mx-4 mt-5'>
                                    <h1 className=' text-xl font-mono font-semibold text-left  '>{project.name}</h1>
                                    <div>
                                        <button onClick={() => navigate(`/projectsCard/${project._id}`)} className=' w-[90%]  py-1.5 px-10 border border-orange-500 rounded text-xs font-medium hover:bg-orange-500 hover:text-white transition-all duration-200 ease-in-out'>Details</button>
                                    </div>
                                </div>
                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Projects;