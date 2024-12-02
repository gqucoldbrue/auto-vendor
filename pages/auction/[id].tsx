import React from 'react';
import { useRouter } from 'next/router';

const AuctionDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto px-4">
      <h1>Auction Detail: {id}</h1>
    </div>
  );
};

// Add static paths for build time
export async function getStaticPaths() {
  return {
    paths: [], // No pre-rendered pages at build time
    fallback: 'blocking' // Generate pages on-demand
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params?.id
    },
  };
}

export default AuctionDetailPage;