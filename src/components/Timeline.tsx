
import React from 'react';
import TimelineItem from './TimelineItem';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export interface TimelineEntry {
  id: number;
  date: string;
  title: string;
  description: string;
  imageSrc: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  const navigate = useNavigate();

  return (
    <div className="relative py-16">
      {/* Enhanced Timeline Line */}
      <div className="absolute w-1 left-1/2 transform -translate-x-1/2 top-0 bottom-0 bg-gradient-to-b from-timeline-purple via-timeline-light-purple to-timeline-soft-pink">
        {/* Animated particles along the timeline */}
        <div className="absolute w-3 h-3 rounded-full bg-white top-[20%] left-1/2 transform -translate-x-1/2 animate-pulse shadow-lg shadow-timeline-purple/50"></div>
        <div className="absolute w-2 h-2 rounded-full bg-white top-[40%] left-1/2 transform -translate-x-1/2 animate-pulse shadow-lg shadow-timeline-purple/50" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute w-2.5 h-2.5 rounded-full bg-white top-[65%] left-1/2 transform -translate-x-1/2 animate-pulse shadow-lg shadow-timeline-purple/50" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Timeline Items */}
      <div className="flex flex-col items-center">
        {entries.map((entry, index) => {
          // Alternate between left and right
          const isLeft = index % 2 === 0;
          
          return (
            <React.Fragment key={entry.id}>
              <TimelineItem
                date={entry.date}
                title={entry.title}
                description={entry.description}
                imageSrc={entry.imageSrc}
                isLeft={isLeft}
                index={index}
              />
              
              {/* Enhanced Timeline Dot */}
              <div className="timeline-dot relative z-10">
                <div className="absolute inset-0 bg-timeline-purple rounded-full animate-ping opacity-30"></div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      
      {/* Gallery Button */}
      <div className="flex justify-center mt-16">
        <Button 
          onClick={() => navigate('/gallery')}
          className="bg-timeline-purple hover:bg-timeline-purple/80 text-white font-semibold px-8 py-2 rounded-full shadow-lg shadow-timeline-purple/30 transition-all duration-300 hover:scale-105"
        >
          View Gallery
        </Button>
      </div>
    </div>
  );
};

export default Timeline;
