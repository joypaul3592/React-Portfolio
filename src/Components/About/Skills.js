import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AiFillHtml5 } from "react-icons/ai";

const Skills = () => {

    const html = 90;
    const css = 85;
    const javascript = 65;
    const react = 60;
    const node = 40;
    const mongodb = 45;

    return (
        <div className='grid  md:grid-cols-3 grid-cols-2 pb-12 md:pb-0 tex gap-16 md:ml-20  rounded-3xl'>


            <div data-aos="zoom-in" className=' w-20 '>
                <CircularProgressbar
                    value={html} text={`${html}%`}
                    styles={buildStyles({
                        rotation: 0.25,
                        textSize: '20px',
                        textColor: '#f98a07',
                        pathColor: '#f98a07',
                        trailColor: '#6a6a6a',
                    })}
                />
                <h1 className='text-center pt-1 text-sm font-semibold font-mono uppercase'>Html</h1>
            </div>

            <div data-aos="zoom-in" className=' w-20'>
                <CircularProgressbar
                    value={css} text={`${css}%`}
                    styles={buildStyles({
                        rotation: 0.25,
                        textSize: '20px',
                        textColor: '#f98a07',
                        pathColor: '#f98a07',
                        trailColor: '#6a6a6a',
                    })}
                />
                <h1 className='text-center pt-1 text-sm font-semibold font-mono uppercase'>css</h1>
            </div>

            <div data-aos="zoom-in" className=' w-20'>
                <CircularProgressbar
                    value={javascript} text={`${javascript}%`}
                    styles={buildStyles({
                        rotation: 0.25,
                        textSize: '20px',
                        textColor: '#f98a07',
                        pathColor: '#f98a07',
                        trailColor: '#6a6a6a',
                    })}
                />
                <h1 className='text-center pt-1 text-sm font-semibold font-mono uppercase'>javascript</h1>
            </div>

            <div data-aos="zoom-out" className=' w-20'>
                <CircularProgressbar
                    value={react} text={`${react}%`}
                    styles={buildStyles({
                        rotation: 0.25,
                        textSize: '20px',
                        textColor: '#f98a07',
                        pathColor: '#f98a07',
                        trailColor: '#6a6a6a',
                    })}
                />
                <h1 className='text-center pt-1 text-sm font-semibold font-mono uppercase'>react</h1>
            </div>

            <div data-aos="zoom-out" className=' w-20'>
                <CircularProgressbar
                    value={node} text={`${node}%`}
                    styles={buildStyles({
                        rotation: 0.25,
                        textSize: '20px',
                        textColor: '#f98a07',
                        pathColor: '#f98a07',
                        trailColor: '#6a6a6a',
                    })}
                />
                <h1 className='text-center pt-1 text-sm font-semibold font-mono uppercase'>node</h1>
            </div>


            <div data-aos="zoom-out" className=' w-20'>
                <CircularProgressbar
                    value={mongodb} text={`${mongodb}%`}
                    styles={buildStyles({
                        rotation: 0.25,
                        textSize: '20px',
                        textColor: '#f98a07',
                        pathColor: '#f98a07',
                        trailColor: '#6a6a6a',
                    })}
                />
                <h1 className='text-center pt-1 text-sm font-semibold font-mono uppercase'>mongodb</h1>
            </div>

        </div>
    );
};

export default Skills;