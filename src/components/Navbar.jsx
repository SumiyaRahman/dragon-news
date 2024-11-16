import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div className='text-2xl font-semibold text-[#403F3F]'>{user && user.name}</div>
            <div className="nav-menu space-x-10 text-[#706F6F] text-base font-normal">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login flex items-center gap-3">
                <div>
                    <img className='w-9 h-9' src={profile} />
                </div>
                <div>
                    <Link to='/auth/login' className='text-base font-semibold text-white py-2 px-10 bg-[#403F3F]'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;