import React, { useState } from "react";
import { ShieldCheck, FileSearch, History, Server, Lock } from "lucide-react";
import { SECURITY_ITEMS } from "../data/content.ts";
import { Reveal } from "./Reveal.tsx";

export const Security: React.FC = () => {
  // Track cursor position per card index for interactive spotlight effect
  const [spotlightPos, setSpotlightPos] = useState<Record<number, { x: number; y: number }>>({});

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlightPos((prev) => ({ ...prev, [index]: { x, y } }));
  };

  const getSecurityIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-[18px] h-[18px] text-white" strokeWidth={1.75} aria-hidden="true" />;
      case "FileSearch":
        return <FileSearch className="w-[18px] h-[18px] text-white" strokeWidth={1.75} aria-hidden="true" />;
      case "History":
        return <History className="w-[18px] h-[18px] text-white" strokeWidth={1.75} aria-hidden="true" />;
      case "Server":
        return <Server className="w-[18px] h-[18px] text-white" strokeWidth={1.75} aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="keamanan"
      className="py-12 sm:py-14 md:py-[72px] relative overflow-hidden text-white"
      style={{
        backgroundColor: "#1d0f50",
        backgroundImage: `
          radial-gradient(ellipse 50% 70% at 100% 0%, rgba(1,124,195,0.35) 0%, transparent 70%),
          radial-gradient(ellipse 40% 60% at 0% 100%, rgba(58,40,132,0.6) 0%, transparent 70%),
          linear-gradient(160deg, #1d0f50 0%, #2a1570 100%)
        `,
      }}
      aria-labelledby="security-heading"
    >
      {/* Smooth 48px gradient transition fade at top and bottom */}
      <div className="absolute top-0 inset-x-0 h-[48px] bg-gradient-to-b from-white to-transparent pointer-events-none opacity-20" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-[48px] bg-gradient-to-t from-white to-transparent pointer-events-none opacity-20" aria-hidden="true" />

      {/* Fine Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(219,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(219,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 min-[960px]:grid-cols-12 gap-8 items-start">
          {/* Left Column (Cols 1–5): Title, Paragraph & Pulsing Lock Illustration */}
          <div className="min-[960px]:col-span-5 flex flex-col justify-between h-full">
            <Reveal>
              <h2
                id="security-heading"
                className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-4"
              >
                Data perusahaan tetap di bawah{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dbffff] to-[#6bd8cb]">
                  kendali Anda.
                </span>
              </h2>

              <p className="text-[15px] text-white/78 leading-[1.6] font-normal mb-8">
                Dibangun untuk lingkungan BUMD yang menuntut akuntabilitas: siapa melihat apa, dan dari mana setiap jawaban berasal.
              </p>

              {/* Pulsing Lock/Shield Illustration */}
              <div className="relative inline-flex items-center justify-center p-4">
                {/* 2 Pulsing Thin Rings */}
                <div
                  className="absolute inset-0 rounded-full border border-[#dbffff]/25 animate-pulse-ring pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 rounded-full border border-[#dbffff]/25 animate-pulse-ring-delayed pointer-events-none"
                  aria-hidden="true"
                />

                {/* 64px Gradient Circle */}
                <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#2a1570] to-[#017cc3] border border-[#dbffff]/30 flex items-center justify-center shadow-lg relative z-10">
                  <Lock className="w-7 h-7 text-[#dbffff]" strokeWidth={1.75} aria-hidden="true" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (Cols 6–12): Dark Glass Cards */}
          <div className="min-[960px]:col-span-7 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch w-full">
              {SECURITY_ITEMS.map((item, idx) => {
                const pos = spotlightPos[idx];
                return (
                  <Reveal key={idx} delay={idx * 80} className="flex h-full w-full">
                    <div
                      onMouseMove={(e) => handleMouseMove(idx, e)}
                      className="group relative w-full p-5 rounded-[18px] bg-white/[0.06] border border-[#dbffff]/14 backdrop-blur-[12px] transition-all duration-300 hover:bg-white/[0.10] hover:border-[#017cc3]/60 hover:shadow-[0_0_0_4px_rgba(1,124,195,0.12)] hover:-translate-y-1 flex flex-col justify-between overflow-hidden h-full"
                      style={{
                        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.10)",
                      }}
                    >
                      {/* Interactive Spotlight Radial Light */}
                      {pos && (
                        <div
                          className="absolute pointer-events-none select-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-full"
                          style={{
                            width: "200px",
                            height: "200px",
                            left: `${pos.x - 100}px`,
                            top: `${pos.y - 100}px`,
                            background: "radial-gradient(circle, rgba(1,124,195,0.18) 0%, transparent 70%)",
                          }}
                          aria-hidden="true"
                        />
                      )}

                      <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                          {/* 36px Icon Circle */}
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#017cc3] to-[#2a1570] border border-[#dbffff]/25 flex items-center justify-center mb-3 shadow-xs shrink-0">
                            {getSecurityIcon(item.icon)}
                          </div>

                          <h3 className="text-[16px] font-semibold text-white tracking-[-0.01em] mb-1.5">
                            {item.title}
                          </h3>

                          <p
                            className={`text-[14px] leading-[1.55] font-normal ${
                              item.description.includes("[DETAIL HOSTING")
                                ? "text-[#dbffff]/80 italic"
                                : "text-white/72"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
