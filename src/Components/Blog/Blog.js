import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=' h-screen  md:pr-36 py-16 md:px-10 px-8 '>
                <div data-aos="fade-down" className=' relative'>
                    <h1 className=' absolute top-0 lg:left-[33%] md:left-[22%] md:text-8xl text-7xl font-bold opacity-5'>Blog</h1>
                    <h2 className='pt-8 md:text-5xl text-4xl font-semibold uppercase font-mono'>My <span className=' text-orange-500'>Blog</span></h2>
                </div>

                <div className='  w-full  md:w-8/12 mx-auto pb-28 md:pb-0'>
                    <div className=" bg-orange-100 p-5 rounded mb-10 mt-10 shadow-lg">
                        <h1 className='w-full bg-gray-100 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>Difference between javascript and nodejs ?</h1>
                        <p className='text-left'>JavaScript is a simple programming language that runs in any browser JavaScript Engine.NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. Nodejs is written in C, C++ and Javascript.</p>
                    </div>
                    <div className="bg-orange-100 p-5  rounded  shadow-lg">
                        <h1 className='w-full bg-gray-100 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>When should you use nodejs and when should you use mongodb ?</h1>
                        <p className='text-left'>There are many web servers built with nodejs that will then use MongoDB for storing data.
                            Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.MongoDB is a technology that's revolutionizing database usage.</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Blog;