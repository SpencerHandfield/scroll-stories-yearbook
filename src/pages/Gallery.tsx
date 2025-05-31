
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Sample gallery images - can be easily expanded by adding more entries
const galleryImages = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=400",
    alt: "New Year's Celebration"
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400",
    alt: "Spring Flowers"
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400",
    alt: "Summer Beach"
  },
  {
    id: 4,
    imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400",
    alt: "Autumn Leaves"
  },
  {
    id: 5,
    imageSrc: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=400",
    alt: "Winter Wonderland"
  },
  {
    id: 6,
    imageSrc: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=400",
    alt: "City Skyline"
  },
  {
    id: 7,
    imageSrc: "https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?auto=format&fit=crop&w=400",
    alt: "Mountain Landscape"
  },
  {
    id: 8,
    imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400",
    alt: "Forest View"
  },
  {
    id: 9,
    imageSrc: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400",
    alt: "Sunset Over Water"
  },
  {
    id: 10,
    imageSrc: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400",
    alt: "Tropical Beach"
  },
  {
    id: 11,
    imageSrc: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400",
    alt: "Starry Night"
  },
  {
    id: 12,
    imageSrc: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400",
    alt: "Landscape Vista"
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen romantic-bg">
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50/40 via-purple-50/30 to-rose-50/40 pointer-events-none" />
      
      <div className="relative z-10 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-pink-200 text-pink-500 hover:bg-pink-25 hover:border-pink-300 transition-all duration-300"
              asChild
            >
              <Link to="/">
                <ArrowLeft size={16} />
                Back to Timeline
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold ml-6 font-display romantic-title">Photo Gallery</h1>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 transform group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image.imageSrc}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/0 via-transparent to-purple-400/0 group-hover:from-pink-400/10 group-hover:to-purple-400/10 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
