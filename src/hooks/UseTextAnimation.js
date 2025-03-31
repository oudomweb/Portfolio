import { useState, useEffect } from 'react';

const useTextAnimation = () => {
  const [text, setText] = useState('Designer');
  
  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        setText('Designer');
      }, 0);
      setTimeout(() => {
        setText('Developer');
      }, 4000);
      setTimeout(() => {
        setText('Freelancer');
      }, 8000);
    };
    
    textLoad();
    const interval = setInterval(textLoad, 12000);
    
    return () => clearInterval(interval);
  }, []);

  return text;
};

export default useTextAnimation;