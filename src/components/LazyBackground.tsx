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
  parallaxSpeed = 0.25
}: LazyBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detectar si es móvil (pantallas menores a 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    // Desactivar parallax en móvil
    if (!parallax || isMobile) return;

    let ticking = false;
    let animationFrameId: number;

    const updateParallax = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const elementTop = rect.top + scrollPosition;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calcular el progreso del scroll relativo al elemento
        const scrollProgress = (scrollPosition + windowHeight - elementTop) / (windowHeight + elementHeight);
        
        // Aplicar el efecto parallax solo cuando el elemento está visible
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          const offset = (scrollProgress - 0.5) * 100 * parallaxSpeed;
          setOffsetY(offset);
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        animationFrameId = requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Calcular la posición inicial
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [parallax, parallaxSpeed, isMobile]);

  return (
    <div
      id={id}
      ref={elementRef}
      className={className}
      style={{
        ...style,
        backgroundImage: isLoaded ? `url(${imageUrl})` : 'none',
        backgroundColor: isLoaded ? 'transparent' : '#1E3A8A',
        backgroundPosition: (parallax && !isMobile) 
          ? `center calc(50% + ${offsetY}px)` 
          : (style.backgroundPosition || 'center center'),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: (parallax && !isMobile) ? 'scroll' : 'scroll',
        transition: 'background-image 0.3s ease-in-out',
        overflow: 'hidden',
        willChange: (parallax && !isMobile) ? 'background-position' : 'auto',
      }}
    >
      {children}
    </div>
  );
};
