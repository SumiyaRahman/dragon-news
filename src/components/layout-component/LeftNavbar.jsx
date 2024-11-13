import React, { useEffect, useState } from 'react';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className='text-xl font-semibold text-[#403F3F]'>All Category</h2>
            <div className='flex flex-col gap-7 mt-5'>
                {
                    categories.map(category => (
                        <button className='btn text-[#403F3F] bg-transparent text-lg font-semibold' key={category.category_id}>{category.category_name}</button>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftNavbar;