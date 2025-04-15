"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (target) {
        // Magnetic effect when hovering over interactive elements
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const magnetStrength = Math.min(100, distance) / distance;
        
        setPosition({
          x: centerX + distanceX * magnetStrength,
          y: centerY + distanceY * magnetStrength,
        });
      } else {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const updateHoverState = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      const interactiveElement = 
        element.tagName === "BUTTON" ||
        element.tagName === "A" ||
        element.closest("button") ||
        element.closest("a");

      setIsHovering(!!interactiveElement);
      if (interactiveElement instanceof HTMLElement) {
        setTarget(interactiveElement);
      } else {
        setTarget(null);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateHoverState);
    window.addEventListener("mouseout", () => setTarget(null));
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateHoverState);
      window.removeEventListener("mouseout", () => setTarget(null));
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [target]);

  return (
    <div
      className={`custom-cursor ${isHovering ? "hover" : ""} ${isClicking ? "clicking" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
