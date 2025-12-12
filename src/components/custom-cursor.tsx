"use client";

import React, { useState, useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const animateCursor = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      if (cursorOutlineRef.current) {
          if (isHovering && hoveredElement) {
              const { x, y, width, height } = hoveredElement.getBoundingClientRect();
              const borderRadius = window.getComputedStyle(hoveredElement).borderRadius;

              cursorOutlineRef.current.style.left = `${x}px`;
              cursorOutlineRef.current.style.top = `${y}px`;
              cursorOutlineRef.current.style.width = `${width}px`;
              cursorOutlineRef.current.style.height = `${height}px`;
              cursorOutlineRef.current.style.borderRadius = borderRadius;
              cursorOutlineRef.current.style.transform = 'none';
          } else {
              cursorOutlineRef.current.style.left = `${mousePosition.x}px`;
              cursorOutlineRef.current.style.top = `${mousePosition.y}px`;
              cursorOutlineRef.current.style.width = '2.5rem';
              cursorOutlineRef.current.style.height = '2.5rem';
              cursorOutlineRef.current.style.borderRadius = '50%';
              cursorOutlineRef.current.style.transform = 'translate(-50%, -50%)';
          }
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateCursor);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateCursor);
    return () => {
        if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
        }
    };
  }, [mousePosition, isHovering, hoveredElement]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest('a, button, [class*="card"]');
      if (interactiveElement) {
        setIsHovering(true);
        setHoveredElement(interactiveElement as HTMLElement);
      }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest('a, button, [class*="card"]');
      if (interactiveElement) {
        setIsHovering(false);
        setHoveredElement(null);
      }
    };
    
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        ref={cursorOutlineRef}
        className='cursor-outline'
      ></div>
    </div>
  );
}
