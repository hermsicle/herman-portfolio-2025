import { useEffect, useRef } from 'react';

interface RotatingAnimationOptions {
  initialAngle?: number;
  rotationSpeed?: number;
}

function useRotatingAnimation({
  initialAngle = 0,
  rotationSpeed = 0.3,
}: RotatingAnimationOptions = {}): React.RefObject<HTMLDivElement> {
  const ellipseRef = useRef<HTMLDivElement | null>(null);
  const ellipseAngle = useRef<number>(initialAngle);
  const animationFrameId = useRef<number>(null);

  useEffect(() => {
    const rotateEllipse = () => {
      if (ellipseRef.current) {
        ellipseAngle.current += rotationSpeed;
        ellipseRef.current.style.transform = `rotate(${ellipseAngle.current}deg)`;
      }
      animationFrameId.current = requestAnimationFrame(rotateEllipse);
    };

    animationFrameId.current = requestAnimationFrame(rotateEllipse);

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, [rotationSpeed]);

  return ellipseRef as React.RefObject<HTMLDivElement>;
}

export default useRotatingAnimation;
