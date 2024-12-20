"use client"; // Marking this as a Client Component

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Define the type for the fetched data
interface FetchedData {
    title: string; // Adjust this according to the actual structure of your data
    // Add other properties as needed
}

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">Luxury Auto Auctions</h1>
      <nav>
        <Link href="/auction">Auction</Link> {/* Updated Link usage */}
        <Link href="/gallery">Gallery</Link> {/* Example of another Link */}
      </nav>
    </div>
  );
};

// Main Page Component
const Page = () => {
  const [data, setData] = useState<FetchedData | null>(null); // Specify the type for data

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.example.com/data'); // Replace with your API
      const result: FetchedData = await res.json(); // Cast the result to the defined type
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
          <div>{data.title}</div> // Now TypeScript knows that data has a title property
        ) : (
          <p>Loading...</p>
        )}
        <HomePage />
      </div>
    </main>
  );
};

export default HomePage;