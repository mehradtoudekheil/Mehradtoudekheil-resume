import React from 'react';
// import { useEffect , useState} from 'react';

const Skills = () => {



    return (
        <div className='p-10'>
            <h3 className='text-4xl font-iransansb text-sky-500 text-center'>مهارت ها</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-centerr w-full p-10'>
                <div className='p-10 flex flex-col items-center'>
                    <h5 className='text-center text-white mb-5'>HTML</h5>
                    <div className="radial-progress text-sky-500 progress-item" data-value="95" style={{ "--value": "95" }} role="progressbar">95%</div>
                </div>
                <div className='p-10 flex flex-col items-center'>
                    <h5 className='text-center text-white mb-5'>CSS</h5>
                    <div className="radial-progress text-sky-500 progress-item" data-value="95" style={{ "--value": "95" }} role="progressbar">95%</div>
                </div>
                <div className='p-10 flex flex-col items-center'>
                    <h5 className='text-center text-white mb-5'>Bootstrap</h5>
                    <div className="radial-progress text-sky-500 progress-item" data-value="90" style={{ "--value": "90" }} role="progressbar">90%</div>
                </div>
                <div className='p-10 flex flex-col items-center'>
                    <h5 className='text-center text-white mb-5'>Tailwind</h5>
                    <div className="radial-progress text-sky-500 progress-item" data-value="60" style={{ "--value": "60" }} role="progressbar">60%</div>
                </div>
                <div className='p-10 flex flex-col items-center'>
                    <h5 className='text-center text-white mb-5'>JavaScript</h5>
                    <div className="radial-progress text-sky-500 progress-item" data-value="75" style={{ "--value": "75" }} role="progressbar">70%</div>
                </div>
                <div className='p-10 flex flex-col items-center'>
                    <h5 className='text-center text-white mb-5'>JQuery</h5>
                    <div className="radial-progress text-sky-500 progress-item" data-value="70" style={{ "--value": "70" }} role="progressbar">70%</div>
                </div>
                <div className='p-10 flex flex-col items-center'>
                    <h5 className='text-center text-white mb-5'>React</h5>
                    <div className="radial-progress text-sky-500 progress-item" data-value="60" style={{ "--value": "60" }} role="progressbar">60%</div>
                </div>
                <div className='p-10 flex flex-col items-center'>
                    <h5 className='text-center text-white mb-5'>Git</h5>
                    <div className="radial-progress text-sky-500 progress-item" data-value="50" style={{ "--value": "50" }} role="progressbar">50%</div>
                </div>
               


            </div>
        </div>
    );
};

export default Skills;