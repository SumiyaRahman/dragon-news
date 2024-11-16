import React from 'react';

const NewsCard = (props = {}) => {
    const {news} = props || {};
    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mt-5">
            {/* Author and Date */}
            <div className="flex items-center px-4 py-2">
                <img className="w-10 h-10 rounded-full" src={news.author.img} alt="Author profile" />
                <div className="ml-3">
                    <p className="text-gray-900 font-semibold">{news.author.name}</p>
                    <p className="text-gray-500 text-sm">{new Date(news.author.published_date).toLocaleDateString()}</p>
                </div>
                <div className="ml-auto">
                    <button className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M20 2H4C2.9 2 2 .9 2 2v20l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
                    </button>
                </div>
            </div>

            {/* Title */}
            <div className="px-4 py-2">
                <h2 className="text-lg font-semibold text-gray-800">{news.title}</h2>
            </div>

            {/* Image */}
            <img className="w-full h-[262px] object-cover" src={news.image_url} alt="Thumbnail" />

            {/* Description */}
            <div className="px-4 py-2">
                <p className="text-gray-600 text-sm">{news.details.slice(0, 100)}...</p>
                <a href="#" className="text-red-500 hover:underline">Read More</a>
            </div>

            {/* Rating and Views */}
            <div className="px-4 py-2 flex items-center justify-between">
                <div className="flex items-center">
                    {/* Stars */}
                    <div className="flex text-yellow-500">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={i < Math.round(news.rating.number) ? 'text-yellow-500' : 'text-gray-300'}>&#9733;</span>
                        ))}
                    </div>
                    <p className="ml-2 text-gray-600 text-sm">{news.rating.number}</p>
                </div>
                {/* Views */}
                <div className="flex items-center text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 6c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm1-13h-2v5h5v-2h-3z"/></svg>
                    <p>{news.total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
