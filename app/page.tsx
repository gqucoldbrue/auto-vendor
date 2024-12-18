// app/page.tsx
"use client"; // Marking this as a Client Component

import React from 'react';
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

// Fetch data directly in the component if needed
const Page = async () => {
  // Example of fetching data (if needed)
  // const res = await fetch('https://api.example.com/data');
  // const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold">Welcome to Auto Vendor</h1>
        {/* Your content here */}
        <HomePage />
      </div>
    </main>
  );
};

export default Page;