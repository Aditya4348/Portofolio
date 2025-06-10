import React, { useRef, useState, useEffect } from "react";

/**
 * A React component that lazily loads its children when they come into view.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - The elements to render lazily.
 * 
 * @returns {JSX.Element} A `<div>` that renders its children only when they become visible in the viewport.
 * 
 * The component uses the IntersectionObserver API to determine when the children
 * should be loaded, based on when the component itself is visible in the viewport.
 * The observer is disconnected once the children are loaded to prevent further observations.
 */

export function LazyLoadSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref} >{isVisible ? children : null}</div>;
}
