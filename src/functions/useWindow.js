import { useState, useEffect } from 'react';

// custom hook to help components check current browser size. 
function useWindowSize() {

    function getSize() {

        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
    }
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      function handleResize() {
        setWindowSize(getSize());
      }
  
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
}

export default useWindowSize