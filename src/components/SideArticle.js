"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const SideArticle = ({ category, article }) => {
    const [data, setData] = useState(article[0]);

    useEffect(() => {
        setData(article[0]);
    }, [article]);

    return (
        <div className="relative mb-4">
            <Link href={data.url} target='_blank' rel="noopener noreferrer"><img src={data.image} alt={data.title} className="w-full h-40 object-cover" /></Link>
            <div className={`absolute top-0 left-0 ${category === 'sports' ? 'bg-green-500' : 'bg-purple-500'} text-white text-xs px-2 py-1`}>
                {category.toUpperCase()}
            </div>
            <Link href={data.url} target='_blank' rel="noopener noreferrer"><h3 className="text-sm font-semibold mt-2">{data.title}</h3></Link>
        </div>
    )
}

export default SideArticle;