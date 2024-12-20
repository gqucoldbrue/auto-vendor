import React from 'react';
import { ChevronRight, Eye, Heart, Share2 } from 'lucide-react';

const LuxuryVehicleShowcase = () => {
  const vehicles = [
    {
      id: 1,
      name: "1932 Rockne Deluxe",
      price: "€475,000",
      details: "Fully restored, matching numbers",
      image: "/api/placeholder/800/600",
      category: "Pre-war Classics"
    },
    {
      id: 2,
      name: "1965 Ferrari 500 Superfast",
      price: "On Request",
      details: "Rare Pininfarina, Ferrari Classiche certified",
      image: "/api/placeholder/800/600",
      category: "Italian Grand Tourers"
    }
  ];

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-8">
        {vehicles.map((vehicle) => (
          <div 
            key={vehicle.id}
            className="group relative overflow-hidden rounded-lg bg-neutral-800 hover:bg-neutral-700 
              transition-all duration-500 ease-out border border-neutral-700"
          >
            {/* Semi-transparent overlay with improved contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
              opacity-70 transition-opacity group-hover:opacity-80 z-10" />
            
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-[28rem] object-cover object-center transform transition-transform 
                duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="space-y-4 backdrop-blur-sm rounded-lg p-4 bg-black/30">
                <div>
                  <p className="text-amber-400 text-sm font-medium tracking-wider mb-2 group-hover:text-amber-300">
                    {vehicle.category}
                  </p>
                  <h3 className="text-2xl text-white font-light tracking-wide group-hover:text-white">
                    {vehicle.name}
                  </h3>
                </div>

                <p className="text-gray-100 font-light">
                  {vehicle.details}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-white text-xl font-light bg-black/40 px-3 py-1 rounded-full">
                    {vehicle.price}
                  </span>
                  
                  <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full bg-black/40 hover:bg-amber-500/80 
                      transition-colors duration-200">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 rounded-full bg-black/40 hover:bg-amber-500/80 
                      transition-colors duration-200">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-full 
                      bg-amber-500 hover:bg-amber-600 transition-colors duration-200">
                      <Eye className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryVehicleShowcase;