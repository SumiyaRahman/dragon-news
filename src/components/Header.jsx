import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <header className='flex flex-col justify-center items-center'>
            <div className="logo mb-5">
                <img className='w-[471px]' src={logo} />
            </div>
            <h2 className='font-normal text-base text-[#706F6F] mb-3'>Journalism Without Fear or Favour</h2>
            <p className='text-lg font-medium text-[#706F6F] text-opacity-80'>
                {
                    moment().format("dddd, MMMM D, YYYY")
                }
            </p>
        </header>
    );
};

export default Header;