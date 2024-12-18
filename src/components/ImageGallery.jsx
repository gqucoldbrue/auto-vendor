import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import the Image component from next/image

export const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative aspect-[16/9] overflow-hidden rounded-lg"
        >
          <Image
            src={image.url} // Use the Image component
            alt={image.description}
            layout="responsive" // Use layout prop for responsive images
            width={500} // Set a width
            height={300} // Set a height
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      ))}
    </div>
  );
};