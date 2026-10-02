import React from "react";
import { ArrowUpRight, MessageCircle, PenLine, FileText, BarChart3 } from "lucide-react";
import { SERVICES_DATA } from "../data/content.ts";
import { Reveal } from "./Reveal.tsx";

export const Services: React.FC = () => {
  const care = SERVICES_DATA.find((s) => s.id === "care")!;
  const content = SERVICES_DATA.find((s) => s.id === "content")!;
  const docu = SERVICES_DATA.find((s) => s.id === "docu")!;
  const board = SERVICES_DATA.find((s) => s.id === "board")!;

  return (
    <section
      id="layanan"
      className="py-12 sm:py-14 md:py-[72px] bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Header - Centered */}
        <Reveal>
          <div className="text-center max-w-[760px] mx-auto mb-8">
            <h2
              id="services-heading"
              className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#2a1570] leading-[1.15] tracking-[-0.02em] mb-3"
            >
              Empat layanan, <span className="text-grad-brand">satu tujuan:</span> kerja BUMD yang lebih ringan.
            </h2>
            <p className="text-[15px] text-[#4a4566] leading-[1.6] font-normal">
              Pilih layanan sesuai kebutuhan unit Anda. Setiap layanan punya halaman sendiri dengan penjelasan lengkap.
            </p>
          </div>
        </Reveal>

        {/* Bento Grid: 12 Columns, 16px gap */}
        <div className="grid grid-cols-1 min-[960px]:grid-cols-12 gap-4 items-stretch">
          {/* Tile 1: AionesCare (Col Span 7) */}
          <div className="min-[960px]:col-span-7 flex">
            <Reveal delay={0} className="w-full flex">
              <a
                href={care.url}
                className="group relative flex flex-col justify-between w-full p-6 rounded-[22px] bg-care-mesh text-white shadow-apple-soft hover:shadow-care-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden focus-visible:ring-2 focus-visible:ring-[#89f5e7] focus-visible:outline-none"
                aria-label={`Buka website ${care.brandPrefix}${care.brandName}`}
              >
                {/* Grain Noise Overlay */}
                <div
                  className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none select-none z-0"
                  aria-hidden="true"
                />

                {/* Shrunk Chat Illustration (Hidden on Mobile) */}
                <div
                  className="hidden lg:flex flex-col gap-2 absolute right-6 top-20 pointer-events-none select-none z-10 opacity-80 scale-90"
                  aria-hidden="true"
                >
                  <div className="bg-white/14 rounded-[12px] rounded-tl-xs p-2.5 max-w-[140px] space-y-1 shadow-xs backdrop-blur-xs">
                    <div className="h-1.5 bg-white/70 rounded-full w-20" />
                    <div className="h-1.5 bg-white/45 rounded-full w-12" />
                  </div>
                  <div className="bg-[#0d9488]/60 border border-[#89f5e7]/40 rounded-[12px] rounded-tr-xs p-2.5 max-w-[150px] ml-auto space-y-1 shadow-xs backdrop-blur-xs">
                    <div className="h-1.5 bg-white/90 rounded-full w-24" />
                    <div className="h-1.5 bg-white/70 rounded-full w-16" />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[12px] font-semibold tracking-[0.08em] text-[#89f5e7] uppercase">
                      {care.categoryLabel}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/14 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-[18px] h-[18px] text-white" strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="text-[22px] md:text-[24px] font-semibold text-white tracking-[-0.02em] mb-2">
                    {care.brandPrefix}
                    <span className="text-[#89f5e7]">{care.brandName}</span>
                  </h3>

                  <p className="text-[14px] text-white/90 leading-[1.55] font-normal max-w-[460px] mb-4">
                    {care.description}
                  </p>

                  {/* Feature Chips */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {care.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="py-[5px] px-3 rounded-full text-[12px] font-medium bg-white/10 text-white border border-[#89f5e7]/35 backdrop-blur-sm"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer pinned to bottom */}
                <div className="relative z-10 mt-auto pt-4 border-t border-[#89f5e7]/22 flex items-center justify-between">
                  <div className="text-[13px] font-normal text-white/80">
                    Untuk: <span className="font-semibold text-white">{care.targetAudience}</span>
                  </div>

                  <div
                    className="w-10 h-10 rounded-full bg-white text-[#006854] flex items-center justify-center shadow-sm group-hover:bg-[#89f5e7] transition-all duration-300 shrink-0"
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      className="w-[18px] h-[18px] text-[#006854] transition-transform duration-300 group-hover:rotate-45"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Tile 2: AionesContent (Col Span 5) */}
          <div className="min-[960px]:col-span-5 flex">
            <Reveal delay={80} className="w-full flex">
              <a
                href={content.url}
                className="group relative flex flex-col justify-between w-full p-6 rounded-[22px] bg-grad-mist text-[#2a1570] border border-[#e6e3f1] shadow-apple-soft hover:shadow-apple-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden focus-visible:ring-2 focus-visible:ring-[#017cc3] focus-visible:outline-none"
                aria-label={`Buka website ${content.brandPrefix}${content.brandName}`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[12px] font-semibold tracking-[0.08em] text-[#017cc3] uppercase">
                      {content.categoryLabel}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-xs shrink-0">
                      <PenLine className="w-[18px] h-[18px] text-[#017cc3]" strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="text-[22px] md:text-[24px] font-semibold text-[#2a1570] tracking-[-0.02em] mb-2">
                    {content.brandPrefix}
                    <span className="text-[#017cc3]">{content.brandName}</span>
                  </h3>

                  <p className="text-[14px] text-[#4a4566] leading-[1.55] font-normal mb-4">
                    {content.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="py-[5px] px-3 rounded-full text-[12px] font-medium bg-white/80 text-[#2a1570] border border-[#e6e3f1] shadow-xs"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-4 border-t border-[#2a1570]/10 flex items-center justify-between">
                  <div className="text-[13px] font-normal text-[#4a4566]">
                    Untuk: <span className="font-semibold text-[#2a1570]">{content.targetAudience}</span>
                  </div>

                  <div
                    className="w-10 h-10 rounded-full bg-[#017cc3] text-white flex items-center justify-center shadow-sm group-hover:bg-[#0169a6] transition-all duration-300 shrink-0"
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      className="w-[18px] h-[18px] transition-transform duration-300 group-hover:rotate-45"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Tile 3: AionesDocu (Col Span 5) */}
          <div className="min-[960px]:col-span-5 flex">
            <Reveal delay={160} className="w-full flex">
              <a
                href={docu.url}
                className="group relative flex flex-col justify-between w-full p-6 rounded-[22px] bg-white text-[#2a1570] border border-[#e6e3f1] shadow-apple-soft hover:shadow-apple-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden focus-visible:ring-2 focus-visible:ring-[#017cc3] focus-visible:outline-none"
                aria-label={`Buka website ${docu.brandPrefix}${docu.brandName}`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[12px] font-semibold tracking-[0.08em] text-[#017cc3] uppercase">
                      {docu.categoryLabel}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-grad-brand flex items-center justify-center shadow-xs shrink-0">
                      <FileText className="w-[18px] h-[18px] text-white" strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="text-[22px] md:text-[24px] font-semibold text-[#2a1570] tracking-[-0.02em] mb-2">
                    {docu.brandPrefix}
                    <span className="text-[#017cc3]">{docu.brandName}</span>
                  </h3>

                  <p className="text-[14px] text-[#4a4566] leading-[1.55] font-normal mb-4">
                    {docu.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {docu.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="py-[5px] px-3 rounded-full text-[12px] font-medium bg-[#eef0f7] text-[#2a1570] border border-[#e6e3f1]"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-4 border-t border-[#e6e3f1] flex items-center justify-between">
                  <div className="text-[13px] font-normal text-[#4a4566]">
                    Untuk: <span className="font-semibold text-[#2a1570]">{docu.targetAudience}</span>
                  </div>

                  <div
                    className="w-10 h-10 rounded-full bg-[#017cc3] text-white flex items-center justify-center shadow-sm group-hover:bg-[#0169a6] transition-all duration-300 shrink-0"
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      className="w-[18px] h-[18px] transition-transform duration-300 group-hover:rotate-45"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Tile 4: AionesBoard (Col Span 7) */}
          <div className="min-[960px]:col-span-7 flex">
            <Reveal delay={240} className="w-full flex">
              <a
                href={board.url}
                className="group relative flex flex-col justify-between w-full p-6 rounded-[22px] bg-grad-deep text-white shadow-apple-soft hover:shadow-apple-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none"
                aria-label={`Buka website ${board.brandPrefix}${board.brandName}`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[12px] font-semibold tracking-[0.08em] text-[#dbffff] uppercase">
                      {board.categoryLabel}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                      <BarChart3 className="w-[18px] h-[18px] text-white" strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="text-[22px] md:text-[24px] font-semibold text-white tracking-[-0.02em] mb-2">
                    {board.brandPrefix}
                    <span className="text-[#dbffff]">{board.brandName}</span>
                  </h3>

                  <p className="text-[14px] text-white/90 leading-[1.55] font-normal max-w-[500px] mb-4">
                    {board.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {board.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="py-[5px] px-3 rounded-full text-[12px] font-medium bg-white/15 text-white border border-white/20 backdrop-blur-sm"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-4 border-t border-white/15 flex items-center justify-between">
                  <div className="text-[13px] font-normal text-white/80">
                    Untuk: <span className="font-semibold text-white">{board.targetAudience}</span>
                  </div>

                  <div
                    className="w-10 h-10 rounded-full bg-white text-[#2a1570] flex items-center justify-center shadow-sm group-hover:bg-[#dbffff] transition-all duration-300 shrink-0"
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      className="w-[18px] h-[18px] transition-transform duration-300 group-hover:rotate-45"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
