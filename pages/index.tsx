// pages/index.tsx
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

export async function getStaticProps() {
  return {
    props: {}, // Will be passed to the page component as props
  };
}

export default HomePage;