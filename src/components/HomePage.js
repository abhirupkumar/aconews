"use client";

import React, { useEffect, useState } from 'react'
import { FeaturedArticle } from './FeaturedArticle';
import SearchBar from './SearchBar';
import { PopularArticle } from './PopularArticle';
import SideArticle from './SideArticle';

const HomePage = ({ articles, articles2, articles3, articles4, featuredArticle, articles6, articles7 }) => {

    const [featuredData, setFeaturedData] = useState(featuredArticle);
    const [data, setData] = useState(articles);
    const [data2, setData2] = useState(articles2);
    const [data3, setData3] = useState(articles3);
    const [data4, setData4] = useState(articles4);
    const [data6, setData6] = useState(articles6);
    const [data7, setData7] = useState(articles7);

    useEffect(() => {
        setFeaturedData(featuredArticle);
        setData(articles);
        setData2(articles2);
        setData3(articles3);
        setData4(articles4);
        setData6(articles6);
        setData7(articles7);
    }, [articles, articles2, articles3, articles4, featuredArticle, articles6, articles7]);

    return (
        <main className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 lg:gap-6 grid-col-1 gap-3">
                {featuredData && featuredData[0] && <FeaturedArticle articles={featuredData} />}
                <div className="flex lg:flex-col gap-1">
                    {data6 && data6[0] && <SideArticle category="sports" article={data6} />}
                    {data7 && data7[0] && <SideArticle category="technology" article={data7} />}
                </div>
            </div>
            <section className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Search</h3>
                <SearchBar />
            </section>
            {data && <section className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Popular</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data?.map((data, index) => <PopularArticle key={index} url={data.url} image={data.image} title={data.title} description={data.description} date={(new Date(data.publishedAt)).toDateString()} />)}
                </div>
            </section>}

            {data2 && <section className="mt-8">
                <h3 className="text-2xl font-bold mb-4">World News</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data2?.map((data, index) => <PopularArticle key={index} url={data.url} image={data.image} title={data.title} description={data.description} date={(new Date(data.publishedAt)).toDateString()} />)}
                </div>
            </section>}

            {data3 && <section className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Bussiness News</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data3?.map((data, index) => <PopularArticle key={index} url={data.url} image={data.image} title={data.title} description={data.description} date={(new Date(data.publishedAt)).toDateString()} />)}
                </div>
            </section>}

            {data4 && <section className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Tech News</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data4?.map((data, index) => <PopularArticle key={index} url={data.url} image={data.image} title={data.title} description={data.description} date={(new Date(data.publishedAt)).toDateString()} />)}
                </div>
            </section>}

        </main>
    )
}

export default HomePage;