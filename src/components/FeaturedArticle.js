"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export const FeaturedArticle = ({ articles }) => {

    const [data, setData] = useState(articles[0]);

    useEffect(() => {
        setData(articles[0]);
    }, [articles]);

    return <>{<div className="col-span-2 relative">
        <Link href={data.url} target='_blank' rel="noopener noreferrer"><img src={data?.image} alt="Featured" className="w-full h-80 object-fill" /></Link>
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4 w-full">
            <span className="text-red-500 text-xs font-semibold">FEATURED</span>
            <Link href={data?.url} target='_blank' rel="noopener noreferrer"><h2 className="text-white text-2xl font-bold mt-1">{data?.title}</h2></Link>
        </div>
    </div>}
    </>
};