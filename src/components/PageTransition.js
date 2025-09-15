import React, { useState, useEffect } from 'react';

const PageTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (children !== displayChildren) {
      setIsTransitioning(true);
      
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [children, displayChildren]);

  return (
    <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <div className="animate-page-in">
        {displayChildren}
      </div>
    </div>
  );
};

export default PageTransition;

