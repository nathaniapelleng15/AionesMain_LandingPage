import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Calendar } from "lucide-react";

export interface CtaButtonProps {
  variant?: "primary" | "secondary" | "onDark" | "outlineOnDark";
  size?: "md" | "lg";
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  showArrow?: boolean;
  magnetic?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  variant = "primary",
  size = "lg",
  href,
  onClick,
  className = "",
  children,
  icon,
  showArrow,
  magnetic = false,
  type = "button",
  disabled = false,
  target,
  rel,
  "aria-label": ariaLabel,
}) => {
  const buttonRef = useRef<HTMLElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [canMagnetic, setCanMagnetic] = useState(false);

  useEffect(() => {
    if (magnetic && typeof window !== "undefined") {
      const isFinePointer = window.matchMedia("(pointer: fine)").matches;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setCanMagnetic(isFinePointer && !prefersReduced);
    }
  }, [magnetic]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!canMagnetic || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    const clampedX = Math.max(-6, Math.min(6, deltaX));
    const clampedY = Math.max(-6, Math.min(6, deltaY));
    setTransformStyle({ x: clampedX, y: clampedY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (canMagnetic) {
      setTransformStyle({ x: 0, y: 0 });
    }
  };

  // Base sizing:
  // md: min-h-[44px], px-6 (24px), text-[14px]
  // lg: min-h-[52px], px-7 (28px), text-[15px]
  const sizeClasses =
    size === "md"
      ? "h-[44px] min-h-[44px] px-6 text-[14px]"
      : "h-[52px] min-h-[52px] px-7 text-[15px]";

  // Variant class mapping
  let variantClass = "";
  let focusClass =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#017cc3] focus-visible:ring-offset-2";

  if (variant === "primary") {
    variantClass = "cta-btn-primary";
  } else if (variant === "secondary") {
    variantClass = "cta-btn-secondary";
  } else if (variant === "onDark") {
    variantClass = "cta-btn-ondark";
    focusClass =
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d0f50]";
  } else if (variant === "outlineOnDark") {
    variantClass = "cta-btn-outline-ondark";
    focusClass =
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d0f50]";
  }

  const disabledClass = disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "cursor-pointer";
  const combinedClasses = `group inline-flex items-center justify-center rounded-full font-semibold select-none ${disabledClass} ${sizeClasses} ${variantClass} ${focusClass} ${className}`;

  // Magnetic inline transform
  const magneticTransform =
    canMagnetic && (transformStyle.x !== 0 || transformStyle.y !== 0)
      ? {
          transform: `translate(${transformStyle.x}px, ${transformStyle.y}px)`,
          transition: isHovered ? "none" : "transform 300ms cubic-bezier(0.2, 0, 0, 1)",
        }
      : undefined;

  // Render inner content
  const renderContent = () => (
    <>
      {/* Shine layer for primary and onDark */}
      {(variant === "primary" || variant === "onDark") && (
        <span className="cta-shine-layer" aria-hidden="true" />
      )}

      {/* Secondary button: Calendar icon smoothly appearing from left */}
      {variant === "secondary" && (
        <span className="inline-flex items-center overflow-hidden transition-all duration-250 ease-out w-0 opacity-0 -translate-x-1.5 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-2 text-[#017cc3]">
          <Calendar className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
        </span>
      )}

      {/* Custom Icon (e.g. Mail icon on outlineOnDark) */}
      {icon && <span className="relative z-10 mr-2 shrink-0">{icon}</span>}

      {/* Text label */}
      <span
        className={`relative z-10 transition-colors duration-200 ${
          variant === "secondary"
            ? "group-hover:bg-gradient-to-r group-hover:from-[#2a1570] group-hover:to-[#017cc3] group-hover:bg-clip-text group-hover:text-transparent"
            : ""
        }`}
      >
        {children}
      </span>

      {/* Primary Arrow Icon */}
      {(showArrow ?? (variant === "primary" && !icon)) && (
        <ArrowRight
          className="relative z-10 ml-2 w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        className={combinedClasses}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        style={magneticTransform}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
      style={magneticTransform}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderContent()}
    </button>
  );
};
