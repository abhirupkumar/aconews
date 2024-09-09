"use client";

import React, { useState } from 'react'
import { Loader2, SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const searchQuery = async (e) => {
        e.preventDefault();
        setLoading(true);
        router.push(`${process.env.NEXT_PUBLIC_HOST}/search?query=${search}`);
        setLoading(false);
    }

    return (
        <form onSubmit={searchQuery} className="w-full space-y-1 text-gray-800">
            <label htmlFor="Search" className="hidden">Search</label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" title="search" className="p-1 focus:outline-none focus:ring">
                        <SearchIcon size={20} />
                    </button>
                </span>
                <input required value={search} onChange={(e) => setSearch(e.target.value)} type="search" name="Search" placeholder="Search..." className="w-full py-2 px-10 text-sm rounded-md focus:outline-none bg-white text-gray-800 focus:bg-gray-50 focus:border-gray-600 border-2" />
                {loading && <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <Loader2 className='animate-spin w-6 h-6' />
                </span>}
            </div>
        </form>
    )
}

export default SearchBar;