
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PhotoProps {
  id: number;
  src: string;
  alt: string;
}

// Sample photos for the gallery
const photos: PhotoProps[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=500&h=500&q=80", alt: "New Year's Celebration" },
  { id: 2, src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&h=500&q=80", alt: "Spring Awakening" },
  { id: 3, src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=500&h=500&q=80", alt: "Summer Vacation" },
  { id: 4, src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&h=500&q=80", alt: "Autumn Colors" },
  { id: 5, src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=500&h=500&q=80", alt: "Winter Wonderland" },
  { id: 6, src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=500&q=80", alt: "Tech Setup" },
  { id: 7, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=500&q=80", alt: "Working Remote" },
  { id: 8, src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&h=500&q=80", alt: "Coding Session" },
  { id: 9, src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&h=500&q=80", alt: "Coffee Break" },
  { id: 10, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&h=500&q=80", alt: "Mountain View" },
  { id: 11, src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=500&h=500&q=80", alt: "Aerial View" },
  { id: 12, src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=500&h=500&q=80", alt: "Forest" }
];

// Reusable Photo component
const Photo: React.FC<PhotoProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-timeline-soft-purple/30 to-timeline-soft-pink/20 py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Button 
            onClick={() => navigate('/')}
            variant="outline" 
            className="flex items-center gap-2 hover:bg-timeline-purple/10"
          >
            <ArrowLeft size={16} />
            Back to Timeline
          </Button>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-center flex-1">Our Photo Gallery</h1>
          <div className="w-20"></div> {/* This creates balance in the header */}
        </div>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="opacity-0 animate-fade-in-up" 
              style={{ animationDelay: `${photo.id * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <Photo {...photo} />
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <footer className="mt-20 text-center">
          <p className="font-sans text-gray-500">
            © {new Date().getFullYear()} Photo Gallery
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Gallery;
