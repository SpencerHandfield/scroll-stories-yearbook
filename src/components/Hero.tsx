
import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="z-10 text-center px-4 md:px-8 max-w-4xl animate-fade-in">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="absolute bottom-12 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-fade-in" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
