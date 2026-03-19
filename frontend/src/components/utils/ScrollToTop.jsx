import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ye line important hai! Ye 'main-content' wale box ko dhoondhegi
    const mainContainer = document.getElementById('main-content');
    
    if (mainContainer) {
      // Aur phir usko top par scroll karegi
      mainContainer.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;