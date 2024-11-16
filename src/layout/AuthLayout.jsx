import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-[#f3f3f3]'>
            <nav className='container mx-auto pt-12'>
                <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;