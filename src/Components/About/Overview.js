import React from 'react';

const Overview = () => {
    return (
        <div className=' flex w-full '>
            <div className='w-[50%]   px-3'>
                <h1 className=' text-2xl font-mono text-left '>Personal Info</h1>
                <hr className=' mb-4' />
                <div className=' flex justify-between'>
                    <div className=' text-left'>
                        <h1 className=' text-sm mb-2 '>
                            Name: <span>Joy Paul</span>
                        </h1>
                        <h1 className=' text-sm mb-2 '>
                            Age: <span>22 Years</span>
                        </h1>
                        <h1 className=' text-sm mb-2 '>
                            languages: <span>Bangla, English</span>
                        </h1>

                    </div>
                    <div className=' text-left'>
                        <h1 className=' text-sm mb-2 '>
                            Mobile: <span>01732023548</span>
                        </h1>
                        <h1 className=' text-sm mb-2 '>
                            Email: <span>joypaul3592@gmail.com</span>
                        </h1>
                        <h1 className=' text-sm mb-2 '>
                            Address: <span>Barisal, Bangladesh</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className=' w-[50%] bg-green-400'>
                <h1>Skill</h1>
            </div>
        </div>
    );
};

export default Overview;