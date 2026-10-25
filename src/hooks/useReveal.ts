import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.05, rootMargin: '80px' }
) {
  const ref = useRef<T | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Respect user motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(element);

    // Failsafe timer so elements are never hidden indefinitely
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 1200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [options]);

  return { ref, isRevealed };
}
