import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className="nav-menu space-x-10 text-[#706F6F] text-base font-normal">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login flex items-center gap-3">
                <div>
                    <img className='w-9 h-9' src={user} />
                </div>
                <div>
                    <button className='text-base font-semibold text-white py-2 px-10 bg-[#403F3F]'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;