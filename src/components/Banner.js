import React from 'react';
import bannerImg from '../img/banner-small.png';
import { FaGithub, FaInstagram, FaTelegram, FaDownload } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='columns-1 md:columns-2 w-full'>

            <div className='text-white flex flex-col justify-center items-end w-full p-10'>
                <div>
                    <h1 className='font-iransansb text-5xl'>مهراد توده خیل</h1>
                    <p className='font-iransansb text-sky-500 mt-8 text-right'>برنامه نویس فرانت اند</p>
                </div>
                <div className='w-full flex justify-between mt-16'>
                    <div className='flex'>
                        <FaGithub className='text-2xl text-sky-500 mx-2' />
                        <FaInstagram className='text-2xl text-sky-500 mx-2' />
                        <FaTelegram className='text-2xl text-sky-500 mx-2' />
                    </div>
                    <div className=''>
                        <btn className='font-iransansl flex bg-sky-500 px-4 py-1 rounded-2xl text-white'>
                            دانلود رزومه
                            <FaDownload className='mt-1 mx-2' />
                        </btn>
                    </div>
                </div>
            </div>

            <div className='text-white flex justify-center w-full p-10'>
                <img src={bannerImg} className="w-80 h-96 rounded-2xl " alt="" />
            </div>
            
        </div>
    );
};

export default Banner;