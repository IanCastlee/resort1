import { useState, useEffect, useCallback } from 'react';

export default function useLightbox(items = []) {
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;
  const currentItem = isOpen && items[activeIndex] ? items[activeIndex] : null;

  const openLightbox = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (!items.length) return;
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const showPrev = useCallback(() => {
    if (!items.length) return;
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, showNext, showPrev]);

  return {
    isOpen,
    activeIndex,
    currentItem,
    openLightbox,
    closeLightbox,
    showNext,
    showPrev,
  };
}
