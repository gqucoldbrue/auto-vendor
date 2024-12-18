"use client"; // Marking this as a Client Component

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">Luxury Auto Auctions</h1>
      <nav>
        <Link href="/auction">
          <a className="mr-4">View Auctions</a>
        </Link>
        <Link href="/gallery">
          <a className="mr-4">Gallery</a>
        </Link>
      </nav>
    </div>
  );
};

// Main Page Component
const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.example.com/data'); // Replace with your API
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold">Welcome to Auto Vendor</h1>
        {/* Render fetched data if available */}
        {data ? (
          <div>{data.title}</div> // Adjust according to your data structure
        ) : (
          <p>Loading...</p>
        )}
        <HomePage />
      </div>
    </main>
  );
};

export default Page;