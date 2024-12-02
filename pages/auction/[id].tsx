import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';

interface AuctionParams {
  params: {
    id: string;
  };
}

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
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true // or false/blocking depending on your needs
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params?.id
    },
  };
}

  export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [],
      fallback: 'blocking'
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }: AuctionParams) => {
    return {
      props: {
        id: params?.id || null
      },
    };
}

export default AuctionDetailPage;