
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-purple-900/5 to-rose-900/10" />
      </div>
      
      <div className="z-10 text-center px-4 md:px-8 max-w-4xl animate-fade-in">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight romantic-title">
          {title}
        </h1>
        {subtitle && (
          <p className="font-script text-2xl md:text-3xl text-pink-50 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="absolute bottom-12 animate-heart-beat">
        <div className="w-8 h-14 rounded-full border-2 border-pink-100 flex items-start justify-center p-2 bg-white/5 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-gradient-to-b from-pink-200 to-rose-300 rounded-full animate-fade-in" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
