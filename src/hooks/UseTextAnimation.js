import { useState, useEffect } from 'react';

const useTextAnimation = () => {
  const words = ['Web Frontend Developer', 'Designer', 'Freelancer', 'Devops', 'Business Analyst']; // Words you want to animate
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // which letter
  const [blink, setBlink] = useState(true); // cursor blinking
  const [forward, setForward] = useState(true); // typing or deleting

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
    }

    const timeout = setTimeout(() => {
      if (forward) {
        if (subIndex < words[index].length) {
          setSubIndex(subIndex + 1);
        } else {
          setForward(false); // start deleting after typing full word
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          setForward(true);
          setIndex((index + 1) % words.length); // move to next word
        }
      }
    }, forward ? 200 : 100);
    //  forward ? 150 : 75); // typing speed and deleting speed

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward]);

  // cursor blinking
  useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
};

export default useTextAnimation;
