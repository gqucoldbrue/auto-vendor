import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import type { Auction } from "@/types/auction"; // Import the Auction type correctly

interface AuctionPageProps {
  initialAuction?: Auction; // Use the Auction type for initialAuction
}

const AuctionPage = ({ initialAuction }: AuctionPageProps) => {
  const params = useParams();
  const [auction, setAuction] = useState<Auction | undefined>(initialAuction); // Specify the type
  const [loading, setLoading] = useState(!initialAuction);

  useEffect(() => {
    if (!initialAuction) {
      // Fetch auction data here
      const fetchAuction = async () => {
        if (!params || !params.id) {
          console.error('No auction ID found in params');
          setLoading(false);
          return;
        }

        try {
          const response = await fetch(`/api/auctions/${params.id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
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
  }, [params, initialAuction]); // Include params in the dependency array

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
      {auction.description && <p>{auction.description}</p>} {/* Example of displaying description */}
    </div>
  );
};

export default AuctionPage;