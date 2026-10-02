import React from "react";
import { ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS, SERVICE_URLS } from "../data/content.ts";
import { Reveal } from "./Reveal.tsx";

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="cara-kerja"
      className="py-12 sm:py-14 md:py-[72px] relative overflow-hidden"
      style={{
        backgroundColor: "#f4feff",
        backgroundImage: `
          radial-gradient(ellipse 50% 60% at 0% 0%, rgba(1,124,195,0.14) 0%, transparent 70%),
          radial-gradient(ellipse 45% 55% at 100% 100%, rgba(42,21,112,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 60% 40% at 50% 40%, rgba(219,255,255,0.9) 0%, transparent 70%)
        `,
      }}
      aria-labelledby="how-it-works-heading"
    >
      {/* Fine Dot Pattern Overlay with Radial Mask */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgba(42,21,112,0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-[760px] mx-auto mb-8">
            <h2
              id="how-it-works-heading"
              className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#2a1570] leading-[1.15] tracking-[-0.02em] mb-3"
            >
              Dari percakapan dan dokumen, sampai{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2a1570] to-[#017cc3]">
                keputusan direksi.
              </span>
            </h2>

            <p className="text-[15px] text-[#4a4566] leading-[1.6] font-normal">
              Keempat layanan AIONES saling melengkapi: data dari satu layanan bisa dimanfaatkan layanan lainnya.
            </p>
          </div>
        </Reveal>

        {/* 3 Step Cards in Equal-Height Grid */}
        <div className="relative mb-8">
          {/* Horizontal Connecting Line with Flowing Light Particle */}
          <div
            className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#2a1570] to-[#017cc3] z-0 overflow-hidden"
            aria-hidden="true"
          >
            {/* Moving light particle #dbffff */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#dbffff] shadow-[0_0_10px_#dbffff] animate-flow-particle"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 relative z-10 items-stretch">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const isStep3 = step.number === "3";

              if (isStep3) {
                // Step 3: Peak of flow - Dark Navy Gradient Card
                return (
                  <Reveal key={step.number} delay={idx * 100} className="flex h-full">
                    <div className="group relative w-full rounded-[20px] bg-gradient-to-br from-[#2a1570] to-[#017cc3] text-white p-5 sm:p-6 border border-white/10 shadow-apple-soft hover:shadow-[0_16px_36px_rgba(42,21,112,0.22)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center overflow-hidden h-full">
                      {/* Soft Aurora in top right */}
                      <div
                        className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#dbffff]/25 blur-[40px] pointer-events-none select-none"
                        aria-hidden="true"
                      />

                      {/* Decorative "03" in bottom right */}
                      <span className="text-[72px] font-bold text-white/10 select-none pointer-events-none absolute bottom-1 right-3 leading-none font-sans">
                        03
                      </span>

                      <div className="relative z-10 flex flex-col items-center w-full">
                        {/* Number circle: white background, text #2a1570 */}
                        <div className="w-10 h-10 rounded-full bg-white text-[#2a1570] flex items-center justify-center font-bold text-[15px] mb-4 shadow-md shrink-0">
                          {step.number}
                        </div>

                        <h3 className="text-[18px] font-semibold text-white tracking-[-0.01em] mb-2">
                          {step.title}
                        </h3>

                        <p className="text-[15px] text-white/88 leading-[1.6] font-normal">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              }

              // Steps 1 & 2: White Glass Cards
              return (
                <Reveal key={step.number} delay={idx * 100} className="flex h-full">
                  <div className="group relative w-full rounded-[20px] bg-white/85 backdrop-blur-[12px] p-5 sm:p-6 border border-[#e6e3f1] shadow-apple-soft hover:border-transparent hover:bg-gradient-to-br hover:from-white hover:to-[#f0f8ff] hover:shadow-[0_16px_36px_rgba(42,21,112,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center overflow-hidden h-full">
                    {/* Top 3px gradient border line */}
                    <div
                      className="h-[3px] bg-gradient-to-r from-[#2a1570] to-[#017cc3] absolute top-0 inset-x-0"
                      aria-hidden="true"
                    />

                    {/* Decorative large "01" / "02" */}
                    <span className="text-[72px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#2a1570] to-[#017cc3] opacity-8 select-none pointer-events-none absolute bottom-1 right-3 leading-none font-sans">
                      0{step.number}
                    </span>

                    <div className="relative z-10 flex flex-col items-center w-full">
                      {/* Number circle: gradient #2a1570 -> #017cc3 with ring-6 ring-[#017cc3]/12 */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2a1570] to-[#017cc3] text-white flex items-center justify-center font-bold text-[15px] mb-4 shadow-sm ring-6 ring-[#017cc3]/12 shrink-0">
                        {step.number}
                      </div>

                      <h3 className="text-[18px] font-semibold text-[#2a1570] tracking-[-0.01em] mb-2">
                        {step.title}
                      </h3>

                      <p className="text-[15px] text-[#4a4566] leading-[1.6] font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Flow Strip below: Care + Content -> Docu -> Board */}
        <Reveal delay={300}>
          <div className="bg-white/80 backdrop-blur-md rounded-full border border-[#dbffff]/50 p-3 sm:p-4 shadow-apple-soft flex flex-col md:flex-row items-center justify-between gap-3 max-w-[960px] mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {/* Care Chip: Care Teal #0f766e */}
              <a
                href={SERVICE_URLS.care}
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#effbf9] border border-[#0f766e] text-[#0f766e] text-[13px] font-semibold shadow-xs transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#0f766e]"
              >
                Care
              </a>

              <span className="text-[#2a1570] font-bold text-[14px]" aria-hidden="true">
                +
              </span>

              {/* Content Chip */}
              <a
                href={SERVICE_URLS.content}
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#eef0f7] border border-[#e6e3f1] text-[#2a1570] text-[13px] font-semibold shadow-xs transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#017cc3]"
              >
                Content
              </a>

              <ArrowRight className="w-3.5 h-3.5 text-[#017cc3] shrink-0" strokeWidth={1.75} aria-hidden="true" />

              {/* Docu Chip */}
              <a
                href={SERVICE_URLS.docu}
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#eef0f7] border border-[#e6e3f1] text-[#2a1570] text-[13px] font-semibold shadow-xs transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#017cc3]"
              >
                Docu
              </a>

              <ArrowRight className="w-3.5 h-3.5 text-[#017cc3] shrink-0" strokeWidth={1.75} aria-hidden="true" />

              {/* Board Chip: Gradient #2a1570 -> #017cc3 */}
              <a
                href={SERVICE_URLS.board}
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2a1570] to-[#017cc3] text-white text-[13px] font-semibold shadow-sm hover:opacity-95 transition-opacity duration-150 focus-visible:ring-2 focus-visible:ring-[#017cc3]"
              >
                Board
              </a>
            </div>

            <p className="text-[13px] font-normal text-[#4a4566] text-center md:text-right">
              data operasional mengalir sampai ke meja direksi
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
