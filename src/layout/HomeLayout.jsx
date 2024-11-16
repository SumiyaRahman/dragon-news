import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-component/LeftNavbar';
import RightNavbar from '../components/layout-component/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='py-[50px]'>
            {/* header */}
            <header>
                <Header></Header>
                <section className='container mx-auto my-8'>
                    <LatestNews></LatestNews>
                </section>
            </header>

            {/* navbar */}
            <nav className='container mx-auto'>
                <Navbar></Navbar>
            </nav>

            {/* main */}
            <main className='container mx-auto py-20 grid md:grid-cols-12 gap-6'>
                <aside className='left col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='main-content col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='right col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;