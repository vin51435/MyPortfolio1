import { useState, useEffect } from 'react';

const useViewportAndFooterHeight = ({ footerSelector }) => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const element = document.querySelector(footerSelector);
    if (element) {
      setFooterHeight(element.clientHeight);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [footerSelector]);

  return { viewportHeight, footerHeight };
};

export default useViewportAndFooterHeight;
