import React from "react";

interface AionesLogoProps {
  className?: string;
  variant?: "default" | "white";
}

export const AionesLogo: React.FC<AionesLogoProps> = ({
  className = "",
  variant = "default",
}) => {
  const isWhite = variant === "white";

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* 2x2 Grid Icon: 26x26px, gap 2.5px, radius 3.5px */}
      <div
        className="w-[26px] h-[26px] grid grid-cols-2 grid-rows-2 gap-[2.5px] shrink-0"
        aria-hidden="true"
      >
        <div
          className={`rounded-[3.5px] ${isWhite ? "bg-[#dbffff]" : "bg-[#2a1570]"}`}
        />
        <div className="bg-[#017cc3] rounded-[3.5px]" />
        <div className="bg-[#017cc3] rounded-[3.5px]" />
        <div
          className={`rounded-[3.5px] ${isWhite ? "bg-[#dbffff]" : "bg-[#2a1570]"}`}
        />
      </div>
      <span
        className={`font-sans font-bold text-[18px] tracking-[-0.4px] leading-none ${
          isWhite ? "text-white" : "text-[#2a1570]"
        }`}
      >
        AIONES
      </span>
    </div>
  );
};
