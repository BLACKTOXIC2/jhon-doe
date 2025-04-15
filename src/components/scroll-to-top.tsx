'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full opacity-90 hover:opacity-100 transition-all duration-300 bg-background/80 backdrop-blur-sm animate-fade-up"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-4 w-4" />
          <span className="sr-only">Scroll to top</span>
        </Button>
      )}
    </>
  );
}
