import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  

  return (
    <div>
      <h2 className="text-xl font-semibold text-[#403F3F]">Dragon News Home</h2>
      <p className="font-normal text-sm text-[#706F6F] mt-2">
        {news.length} News found in this category
      </p>
      <div className="space-y-5">
        {
            news.map(singleNews => (
                <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
            ))
        }
      </div>
    </div>
  );
};

export default CategoryNews;
