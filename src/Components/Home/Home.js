import React from 'react';
import { BsArrowDownCircle } from "react-icons/bs";
import './Home.css'
import heroImg from '../../assest/heroimg.png'

const Home = () => {
    return (
        <div className='pb-28 md:pb-0 md:h-screen  md:flex items-center md:px-10 px-8 md:pr-36'>
            <div className=' md:w-[45%] w-full h-80 rounded-t-full py-5 md:py-0 mt-5 md:mt-0 rounded-l-full border border-gray-300 mr-12'>
                <img className='lg:mt-[-100px]' src={heroImg} alt="Hero Image" />
            </div>
            <div className='md:w-[45%] w-full py-5 md:py-0'>
                <h3 className=' text-xl text-orange-600'>Hello, I'm</h3>
                <h1 className=' text-5xl font-semibold uppercase font-mono my-3'>Joy Paul</h1>
                <h3 className=' text-md font-mono text-orange-600 mb-2 uppercase' >F r o n t e n d  <span className='ml-2'>D e v e l o p e r</span></h3>
                <p className=' text-justify'>I'm a web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent Website that improves the lives of those around me.</p>
                <a href="https://drive.google.com/file/d/1xn62MH0ycFEpU4O7HKv08Wr65czFPfDp/view?usp=sharing" target="_blank">
                    <button className='py-1 px-5 flex btn hover:bg-orange-500 hover:border-orange-500 hover:text-white border transition border-black font-mono rounded-2xl mt-5'>Download CV <BsArrowDownCircle className='animate-bounce arrow text-orange-500  ml-3 mt-[6px]' /></button>
                </a>
            </div>

        </div>
    );
};

export default Home;