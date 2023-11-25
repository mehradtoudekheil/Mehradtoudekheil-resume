import React from 'react';
import { FaSun } from "react-icons/fa";

const Navigation = () => {
    return (
        <div className='navigation flex p-5 justify-between'>
            <div className='account-bar flex'>
                <FaSun className='text-white mt-1 mx-3 text-xl'/>
                <p className='text-white text-xl'>En</p>
            </div>
            <nav className='flex h-full items-center'>
                <a href="#" className='text-sky-500 mx-4 font-iransansb'>درباره من</a>
                <a href="#" className='text-sky-500 mx-4 font-iransansb'>رزومه</a>
                <a href="#" className='text-sky-500 mx-4 font-iransansb'>نمونه کار ها</a>
                <a href="#" className='text-sky-500 mx-4 font-iransansb'>ارتباط با من</a>
            </nav>
        </div>
    );
};

export default Navigation;