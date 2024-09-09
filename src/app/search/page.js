import SearchPage from '@/components/SearchPage';
import React from 'react'

const Page = async ({ params, searchParams }) => {

    const fetchData = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/searchquery`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query: searchParams.query })
    });
    const { success, data, result } = await fetchData.json();

    return (
        <SearchPage searchResults={data} />
    )
}

export default Page;