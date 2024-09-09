"use client";

import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import SearchBar from './SearchBar';

const SearchPage = ({ searchResults }) => {

    const truncate = (text) => {
        return text.length > 170 ? text.substring(0, 170) + '...' : text;
    }

    if (searchResults === undefined) {
        return (
            <div className="container p-6 overflow-y-auto">
                <p className="text-gray-500 text-center">API Limit Reached! Try Again after 24 hours.</p>
            </div>
        )
    }

    return (
        <div className="container p-6 overflow-y-auto">
            <div className="flex justify-center items-center mb-4">
                <SearchBar />
            </div>
            {searchResults.length === 0 && <p className="text-gray-500 text-center">No results!</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
                {searchResults?.map((result, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                        <Link href={result?.url} target='_blank' rel="noopener noreferrer"><img src={result?.image} alt={result?.title} className="w-full h-48 object-cover" /></Link>
                        <div className="p-4">
                            <Link href={result?.url} target='_blank' rel="noopener noreferrer"><h3 className="font-semibold mb-2">{result?.title}</h3></Link>
                            <p className="text-sm text-gray-600 mb-2">{truncate(result?.description)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchPage;