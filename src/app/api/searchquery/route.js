import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { query } = await request.json();
        const fetchData = await fetch(`https://gnews.io/api/v4/search?q=${query}&apikey=${process.env.GNEWS_API_KEY}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });
        const data = await fetchData.json();
        return NextResponse.json({ success: true, data: data.articles, result: data }, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ success: false, data: null }, { status: 500 });
    }
}