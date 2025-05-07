
import React from 'react';
import TimelineItem from './TimelineItem';

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
  return (
    <div className="relative py-16">
      {/* Timeline Line */}
      <div className="timeline-line" />
      
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
              
              {/* Timeline Dot */}
              <div className="timeline-dot" />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
