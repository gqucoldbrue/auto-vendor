import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import VehicleGallery from './pages/VehicleGallery';
import MembershipApplication from './pages/MembershipApplication';
import AdminDashboard from './pages/AdminDashboard';
import AuctionRoom from './pages/AuctionRoom';

const queryClient = new QueryClient();

export default function App() {
  return (
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_KEY}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<VehicleGallery />} />
            <Route path="/apply" element={<MembershipApplication />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/auction/:id" element={<AuctionRoom />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ClerkProvider>
  );
}