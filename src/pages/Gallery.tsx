
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
    <div className="min-h-screen bg-gradient-to-b from-timeline-soft-purple/30 to-timeline-soft-pink/20 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            asChild
          >
            <Link to="/">
              <ArrowLeft size={16} />
              Back to Timeline
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold ml-4 font-serif">Photo Gallery</h1>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02] transform transition-transform"
            >
              <img
                src={image.imageSrc}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
