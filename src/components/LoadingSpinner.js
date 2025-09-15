import React from 'react';
import { Sparkles } from 'lucide-react';

const LoadingSpinner = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'h-6 w-6',
    medium: 'h-8 w-8',
    large: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <div className={`${sizeClasses[size]} border-4 border-jimdar-blue/20 border-t-jimdar-blue rounded-full animate-spin`}></div>
        <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-jimdar-light animate-pulse" />
      </div>
      <p className="text-jimdar-light text-sm font-medium animate-pulse">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
