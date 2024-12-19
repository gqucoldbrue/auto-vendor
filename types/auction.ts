import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Auction from "@/types/auction"; // Keep this if Auction is a named export

interface AuctionPageProps {
  initialAuction?: Auction;
}

export interface Auction {
  id: string;
  title: string;
  // Add other auction properties you need
}

const AuctionPage = ({ initialAuction }: AuctionPageProps) => {
  const params = useParams();
  const [auction, setAuction] = useState<Auction | undefined>(initialAuction); // Specify the type
  const [loading, setLoading] = useState(!initialAuction);

  useEffect(() => {
    if (!initialAuction) {
      // Fetch auction data here
      const fetchAuction = async () => {
        try {
          const response = await fetch(`/api/auctions/${params.id}`);
          const data: Auction = await response.json(); // Cast the response to Auction type
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