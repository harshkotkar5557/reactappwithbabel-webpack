import { useState, useEffect } from 'react';

export const useKeyboardNavigation = (results) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [lastInteraction, setLastInteraction] = useState('mouse');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        setLastInteraction('keyboard');
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleArrowKeys = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : results.length - 1
      );
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCurrentIndex((prevIndex) =>
        prevIndex < results.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const handleMouseEnter = (index) => {
    if (lastInteraction === 'mouse') {
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (lastInteraction === 'mouse') {
      setCurrentIndex(-1);
    }
  };

  const handleMouseMove = () => {
    setLastInteraction('mouse');
  };

  return {
    currentIndex,
    handleArrowKeys,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  };
};
