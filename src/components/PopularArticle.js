import Link from 'next/link';
import React from 'react'

export const PopularArticle = ({ image, url, title, description, date }) => {
    const truncate = (str) => str.length > 130 ? str.substring(0, 130) + '...' : str;
    return <div className="mb-4">
        <Link href={url} target='_blank' rel="noopener noreferrer"><img src={image} alt={title} className="w-full h-40 object-cover mb-2" /></Link>
        <Link href={url} target='_blank' rel="noopener noreferrer"><h4 className="font-semibold text-sm">{title}</h4></Link>
        <p className="text-sm">{truncate(description)}</p>
        <p className="text-gray-500 text-xs">{date}</p>
    </div>
};