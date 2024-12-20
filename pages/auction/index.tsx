// pages/auction/index.tsx
import Layout from '@/components/Layout/Layout';
import { LuxuryVehicleShowcase } from '@/components/LuxuryVehicleShowcase';

export default function AuctionGallery() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-light text-white tracking-wider mb-2">
            Luxury Auto Auctions
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-amber-500 to-amber-700" />
        </div>
        <LuxuryVehicleShowcase />
      </div>
    </Layout>
  );
}