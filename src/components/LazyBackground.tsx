import { useEffect, useRef, useState } from "react";

interface LazyBackgroundProps {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  parallax?: boolean;
  parallaxSpeed?: number;
}

export const LazyBackground = ({ 
  imageUrl, 
  children, 
  className = "", 
  style = {}, 
  id, 
  parallax = true,
  parallaxSpeed = 0.4
}: LazyBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
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

  useEffect(() => {
    if (!parallax) return;

    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const offset = elementTop * parallaxSpeed;
        setOffsetY(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [parallax, parallaxSpeed]);

  return (
    <div
      id={id}
      ref={elementRef}
      className={className}
      style={{
        ...style,
        backgroundImage: isLoaded ? `url(${imageUrl})` : 'none',
        backgroundColor: isLoaded ? 'transparent' : '#1E3A8A',
        backgroundPosition: parallax ? `center calc(10% - ${offsetY}px)` : (style.backgroundPosition || 'center 10%'),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.3s ease-in-out',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};
