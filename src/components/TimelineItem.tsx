
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
  const animationDelay = `${index * 0.2}s`;

  return (
    <div 
      ref={itemRef} 
      className={`timeline-item flex items-center justify-center w-full my-20 ${isVisible ? 'animate' : ''}`}
      style={{ animationDelay }}
    >
      <div className="container relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
        {/* Content for left positioning */}
        {isLeft ? (
          <>
            <div className="md:text-right flex flex-col justify-center order-2 md:order-1 px-6 timeline-content">
              <span className="font-script text-lg font-semibold romantic-date mb-2 tracking-wide">{date}</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 romantic-title leading-tight">{title}</h3>
              <p className="font-sans text-gray-700 text-lg leading-relaxed">{description}</p>
            </div>
            <div className="flex justify-center md:justify-start order-1 md:order-2 px-6">
              <div className="timeline-image-container relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-md h-72 md:h-80">
                <img 
                  src={imageSrc} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-transparent to-purple-400/10" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center md:justify-end order-1 px-6">
              <div className="timeline-image-container relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-md h-72 md:h-80">
                <img 
                  src={imageSrc} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400/10 via-transparent to-pink-400/10" />
              </div>
            </div>
            <div className="flex flex-col justify-center order-2 px-6 timeline-content">
              <span className="font-script text-lg font-semibold romantic-date mb-2 tracking-wide">{date}</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 romantic-title leading-tight">{title}</h3>
              <p className="font-sans text-gray-700 text-lg leading-relaxed">{description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
