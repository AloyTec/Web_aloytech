import { useEffect, useRef, useState } from "react";

interface LazyBackgroundProps {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export const LazyBackground = ({ imageUrl, children, className = "", style = {}, id }: LazyBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
              setIsLoaded(true);
            };
          }
        });
      },
      { rootMargin: "50px" }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [imageUrl, isLoaded]);

  return (
    <div
      id={id}
      ref={elementRef}
      className={className}
      style={{
        ...style,
        backgroundImage: isLoaded ? `url(${imageUrl})` : 'none',
        backgroundColor: isLoaded ? 'transparent' : '#1E3A8A',
        transition: 'background-image 0.3s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};
