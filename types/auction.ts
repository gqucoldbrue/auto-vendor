import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import type { Auction } from '@/types/auction';

interface AuctionPageProps {
  initialAuction?: Auction;
}

const AuctionPage = ({ initialAuction }: AuctionPageProps) => {
  const params = useParams();
  const [auction, setAuction] = useState(initialAuction);
  const [loading, setLoading] = useState(!initialAuction);

  useEffect(() => {
    if (!initialAuction) {
      // Fetch auction data here
      const fetchAuction = async () => {
        try {
          const response = await fetch(`/api/auctions/${params.id}`);
          const data = await response.json();
          setAuction(data);
        } catch (error) {
          console.error('Error fetching auction:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchAuction();
    }
  }, [params.id, initialAuction]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!auction) {
    return <div className="min-h-screen flex items-center justify-center">Auction not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{auction.title}</h1>
      {/* Add your auction details UI here */}
    </div>
  );
};

export default AuctionPage;