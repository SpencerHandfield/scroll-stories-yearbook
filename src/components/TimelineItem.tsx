
import React, { useEffect, useRef, useState } from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  isLeft: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  date, 
  title, 
  description, 
  imageSrc, 
  isLeft,
  index
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  // Staggered animation delay based on index
  const animationDelay = `${index * 0.1}s`;

  return (
    <div 
      ref={itemRef} 
      className={`timeline-item flex items-center justify-center w-full my-16 ${isVisible ? 'animate' : ''}`}
      style={{ animationDelay }}
    >
      <div className="container relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        {/* Content for left positioning */}
        {isLeft ? (
          <>
            <div className="md:text-right flex flex-col justify-center order-2 md:order-1 px-4">
              <span className="font-sans text-sm font-semibold text-timeline-purple mb-1">{date}</span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">{title}</h3>
              <p className="font-sans text-gray-600">{description}</p>
            </div>
            <div className="flex justify-center md:justify-start order-1 md:order-2 px-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg w-full max-w-md h-64 md:h-72">
                <img 
                  src={imageSrc} 
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center md:justify-end order-1 px-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg w-full max-w-md h-64 md:h-72">
                <img 
                  src={imageSrc} 
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center order-2 px-4">
              <span className="font-sans text-sm font-semibold text-timeline-purple mb-1">{date}</span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">{title}</h3>
              <p className="font-sans text-gray-600">{description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
