import { useEffect, useRef, useState } from 'react';

/**
 * Content is visible by default. Only if IntersectionObserver is available
 * and the user hasn't asked for reduced motion do we opt an element into
 * the hidden -> revealed animation. This means a failed script load, a
 * blocked bundle, or a crawler with JS disabled never hides real content.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    setIsPending(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const className = ['reveal', isPending && 'reveal-pending', isVisible && 'is-visible']
    .filter(Boolean)
    .join(' ');

  return { ref, className, isVisible };
}
