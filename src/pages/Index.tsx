
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GalleryHorizontal } from "lucide-react";
import Hero from '../components/Hero';
import Timeline, { TimelineEntry } from '../components/Timeline';

// Sample timeline entries
const timelineEntries: TimelineEntry[] = [
  {
    id: 1,
    date: "January 2023",
    title: "New Year's Celebration",
    description: "Started the year with friends and family, celebrating new beginnings and setting goals for the months ahead.",
    imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800"
  },
  {
    id: 2,
    date: "March 2023",
    title: "Spring Awakening",
    description: "Witnessed nature's rebirth as spring arrived with blooming flowers and warmer days, perfect for outdoor adventures.",
    imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800"
  },
  {
    id: 3,
    date: "June 2023",
    title: "Summer Vacation",
    description: "Explored beautiful beaches, hiked through mountains, and created unforgettable memories during our summer getaway.",
    imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800"
  },
  {
    id: 4,
    date: "September 2023",
    title: "Autumn Colors",
    description: "Experienced the magical transformation of landscapes as leaves changed colors, painting the world in warm hues.",
    imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800"
  },
  {
    id: 5,
    date: "December 2023",
    title: "Winter Wonderland",
    description: "Embraced the holiday spirit with festive decorations, snowfall, and quality time spent with loved ones.",
    imageSrc: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen romantic-bg">
      {/* Enhanced background overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50/40 via-purple-50/30 to-rose-50/40 pointer-events-none" />
      
      {/* Hero Section */}
      <Hero 
        title="2023: Our Year in Review" 
        subtitle="A journey through the moments that defined our year"
        imageSrc="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1800"
      />
      
      {/* Timeline Section */}
      <Timeline entries={timelineEntries} />
      
      {/* Gallery Button Section */}
      <div className="py-20 flex justify-center relative z-10">
        <Button 
          size="lg" 
          className="group bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 hover:from-pink-500 hover:via-rose-500 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-102 transition-all duration-300 px-8 py-4 text-lg font-medium animate-romantic-glow"
          asChild
        >
          <Link to="/gallery" className="flex items-center gap-3">
            <span className="font-script text-xl">View Full Gallery</span>
            <GalleryHorizontal className="group-hover:translate-x-1 transition-transform duration-300" size={24} />
          </Link>
        </Button>
      </div>
      
      {/* Footer */}
      <footer className="py-12 text-center relative z-10">
        <p className="font-sans text-rose-300/60 text-lg">
          © {new Date().getFullYear()} Year in Review Timeline
        </p>
      </footer>
    </div>
  );
};

export default Index;
