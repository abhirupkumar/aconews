import React from 'react';
import HomePage from '@/components/HomePage';

export default async function Home() {

  const fetchData = await fetch(`https://gnews.io/api/v4/top-headlines?category=nation&lang=en&country=in&max=4&apikey=${process.env.GNEWS_API_KEY}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });
  const fetchData2 = await fetch(`https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=in&max=4&apikey=${process.env.GNEWS_API_KEY}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });
  const fetchData3 = await fetch(`https://gnews.io/api/v4/top-headlines?category=world&lang=en&country=in&max=4&apikey=${process.env.GNEWS_API_KEY}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  const fetchData4 = await fetch(`https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=in&max=4&apikey=${process.env.GNEWS_API_KEY}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  const fetchData5 = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=1&apikey=${process.env.GNEWS_API_KEY}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });
  const fetchData6 = await fetch(`https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=in&max=1&apikey=${process.env.GNEWS_API_KEY}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });
  const fetchData7 = await fetch(`https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=in&max=1&apikey=${process.env.GNEWS_API_KEY}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });
  const { articles } = await fetchData.json();
  const { articles: articles2 } = await fetchData2.json();
  const { articles: articles3 } = await fetchData3.json();
  const { articles: articles4 } = await fetchData4.json();
  const { articles: featuredArticle } = await fetchData5.json();
  const { articles: articles6 } = await fetchData6.json();
  const { articles: articles7 } = await fetchData7.json();

  if (!articles && !articles2 && !articles3 && !articles4) {
    return (<main className="container flex mx-auto w-full">
      <p className='mx-auto mt-14'>API Limit Reached! Try again after 24 hours.</p>
    </main>);
  }

  return (
    <HomePage articles={articles} articles2={articles2} articles3={articles3} articles4={articles4} featuredArticle={featuredArticle} articles6={articles6} articles7={articles7} />
  );
};