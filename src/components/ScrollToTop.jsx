import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-rose-950 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-rose-900 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    )
  );
};

export default ScrollToTop;
