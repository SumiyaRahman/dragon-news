import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-component/LeftNavbar';

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
                <section className='main-content col-span-6'>Main content</section>
                <aside className='right col-span-3'>Right Navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;