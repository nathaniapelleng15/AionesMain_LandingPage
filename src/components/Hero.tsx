import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SERVICE_URLS } from "../data/content.ts";
import { Reveal } from "./Reveal.tsx";
import { HeroOrbits } from "./HeroOrbits.tsx";
import { CtaButton } from "./CtaButton.tsx";

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative pt-[56px] pb-12 sm:pt-[56px] sm:pb-16 md:pt-[56px] md:pb-20 bg-grad-sky overflow-hidden"
      aria-label="Pengenalan Ekosistem AIONES"
    >
      {/* Static Apple-style Aurora behind heading: 2 blurred static circles (z-0, reduced ~15%) */}
      <div
        className="absolute top-10 left-1/2 -translate-x-[65%] w-[410px] h-[300px] rounded-full bg-[#017cc3]/18 blur-[70px] pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-16 left-1/2 -translate-x-[35%] w-[370px] h-[270px] rounded-full bg-[#2a1570]/12 blur-[70px] pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* Layer 1: Orbiting Light Streaks (z-1) */}
      <HeroOrbits />

      {/* Layer 2: Hero Content (z-2) */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 relative z-[2]">
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto">
          {/* H1 - Responsive: 32px -> 38px -> 48px, weight 700, tracking -0.02em */}
          <Reveal delay={0}>
            <h1 className="text-[32px] sm:text-[38px] min-[960px]:text-[48px] font-bold text-[#2a1570] leading-[1.1] tracking-[-0.02em] mb-4 mx-auto">
              Satu ekosistem AI untuk melayani, berkarya, dan{" "}
              <span className="text-grad-brand">memutuskan lebih cepat.</span>
            </h1>
          </Reveal>

          {/* Paragraph - 16px, line-height 1.6, max-width 600px */}
          <Reveal delay={80}>
            <p className="text-[16px] text-[#4a4566] leading-[1.6] font-normal mb-[28px] max-w-[600px] mx-auto">
              AIONES menghadirkan empat layanan AI — layanan pelanggan, konten kreatif, pengolahan dokumen, dan dashboard direksi — untuk Badan Usaha Milik Daerah. Pilih layanan yang Anda butuhkan.
            </p>
          </Reveal>

          {/* Action Buttons: CtaButton Primary + Secondary (h-46px, font 15px) */}
          <Reveal delay={160}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-[20px]">
              <CtaButton
                variant="primary"
                size="lg"
                href="#layanan"
                magnetic
                showArrow={false}
                className="w-full sm:w-auto h-[46px] min-h-[46px] px-6 text-[15px]"
              >
                Jelajahi 4 Layanan
              </CtaButton>

              <CtaButton
                variant="secondary"
                size="lg"
                href="#contact"
                onClick={() => window.dispatchEvent(new CustomEvent("set-contact-reason", { detail: "Jadwalkan demo" }))}
                className="w-full sm:w-auto h-[46px] min-h-[46px] px-6 text-[15px]"
              >
                Jadwalkan Demo
              </CtaButton>
            </div>
          </Reveal>

          {/* 4 Direct Service Link Chips: height 32px, font 13px, no arrow */}
          <Reveal delay={240}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
              <a
                href={SERVICE_URLS.care}
                className="hero-service-chip hero-service-chip-care inline-flex items-center justify-center h-[32px] px-4 rounded-full text-[#2a1570] text-[13px] font-medium group select-none shadow-xs focus-visible:ring-2 focus-visible:ring-[#257c1b] focus-visible:outline-none"
              >
                <span>Aiones<span className="text-[#0f766e]">Care</span></span>
              </a>

              <a
                href={SERVICE_URLS.content}
                className="hero-service-chip inline-flex items-center justify-center h-[32px] px-4 rounded-full text-[#2a1570] text-[13px] font-medium group select-none shadow-xs focus-visible:ring-2 focus-visible:ring-[#017cc3] focus-visible:outline-none"
              >
                <span>AionesContent</span>
              </a>

              <a
                href={SERVICE_URLS.docu}
                className="hero-service-chip inline-flex items-center justify-center h-[32px] px-4 rounded-full text-[#2a1570] text-[13px] font-medium group select-none shadow-xs focus-visible:ring-2 focus-visible:ring-[#017cc3] focus-visible:outline-none"
              >
                <span>AionesDocu</span>
              </a>

              <a
                href={SERVICE_URLS.board}
                className="hero-service-chip inline-flex items-center justify-center h-[32px] px-4 rounded-full text-[#2a1570] text-[13px] font-medium group select-none shadow-xs focus-visible:ring-2 focus-visible:ring-[#017cc3] focus-visible:outline-none"
              >
                <span>AionesBoard</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* SHOWCASE PANEL: Max-width 1000px, padding 24px, radius 24px */}
        <Reveal delay={300}>
          <div className="max-w-[1000px] mx-auto">
            {/* Label above panel */}
            <div className="text-center mb-2.5">
              <span className="text-[12px] font-semibold tracking-[0.08em] text-[#8a84a8] uppercase">
                Empat layanan · Satu ekosistem
              </span>
            </div>

            <div className="bg-grad-deep rounded-[24px] p-6 shadow-apple-showcase border border-white/10 relative overflow-hidden">
              {/* 4 Mini Mockups in 4 Columns (gap 16px) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-4 gap-4">
                {/* 01 · CARE */}
                <a
                  href={SERVICE_URLS.care}
                  aria-label="Buka website AionesCare"
                  className="group relative flex flex-col justify-between bg-white/8 hover:bg-white/14 border border-white/14 rounded-[18px] p-[18px] backdrop-blur-[12px] transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[12px] font-semibold text-white tracking-[0.08em] uppercase">
                        01 · CARE
                      </span>
                      <span className="text-[12px] font-medium text-white group-hover:translate-x-0.5 flex items-center gap-1 transition-all duration-150">
                        <span>Buka</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform duration-150" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                    </div>

                    {/* Chat Bubble simulation */}
                    <div className="space-y-2 mb-3">
                      <div className="bg-white/14 text-white text-[13px] py-2.5 px-3.5 rounded-[12px] max-w-[90%] leading-snug">
                        Tagihan bulan ini sudah bisa dibayar?
                      </div>
                      <div className="bg-[#017cc3] text-white text-[13px] py-2.5 px-3.5 rounded-[12px] ml-auto max-w-[92%] leading-snug shadow-sm">
                        Sudah. Ini rincian dan kanal pembayarannya…
                      </div>
                    </div>
                  </div>

                  {/* Channel Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    <span className="px-[10px] py-0.5 rounded-full text-[11px] font-medium bg-white/12 text-white">
                      WhatsApp
                    </span>
                    <span className="px-[10px] py-0.5 rounded-full text-[11px] font-medium bg-white/12 text-white">
                      Web
                    </span>
                    <span className="px-[10px] py-0.5 rounded-full text-[11px] font-medium bg-white/12 text-white">
                      Email
                    </span>
                  </div>
                </a>

                {/* 02 · CONTENT */}
                <a
                  href={SERVICE_URLS.content}
                  aria-label="Buka website AionesContent"
                  className="group relative flex flex-col justify-between bg-white/8 hover:bg-white/14 border border-white/14 rounded-[18px] p-[18px] backdrop-blur-[12px] transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[12px] font-semibold text-white tracking-[0.08em] uppercase">
                        02 · CONTENT
                      </span>
                      <span className="text-[12px] font-medium text-white group-hover:translate-x-0.5 flex items-center gap-1 transition-all duration-150">
                        <span>Buka</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform duration-150" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                    </div>

                    {/* Mini Calendar Grid 5x2 */}
                    <div className="mb-3">
                      <div className="grid grid-cols-5 gap-1.5 mb-2">
                        <div className="h-[26px] rounded-[5px] bg-[#017cc3] flex items-center justify-center text-[11px] text-white font-semibold">IG</div>
                        <div className="h-[26px] rounded-[5px] bg-white/10" />
                        <div className="h-[26px] rounded-[5px] bg-[#017cc3] flex items-center justify-center text-[11px] text-white font-semibold">FB</div>
                        <div className="h-[26px] rounded-[5px] bg-white text-[#2a1570] flex items-center justify-center text-[11px] font-semibold">X</div>
                        <div className="h-[26px] rounded-[5px] bg-white/10" />
                        <div className="h-[26px] rounded-[5px] bg-white/10" />
                        <div className="h-[26px] rounded-[5px] bg-[#017cc3] flex items-center justify-center text-[11px] text-white font-semibold">YT</div>
                        <div className="h-[26px] rounded-[5px] bg-white/10" />
                        <div className="h-[26px] rounded-[5px] bg-white text-[#2a1570] flex items-center justify-center text-[11px] font-semibold">PR</div>
                        <div className="h-[26px] rounded-[5px] bg-white/10" />
                      </div>

                      {/* 2 Progress Bars */}
                      <div className="space-y-1.5 pt-1">
                        <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-white h-full w-[80%]" />
                        </div>
                        <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-white/60 h-full w-[60%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] font-medium text-white/90 border-t border-white/10">
                    Jadwal & Produksi Konten
                  </div>
                </a>

                {/* 03 · DOCU */}
                <a
                  href={SERVICE_URLS.docu}
                  aria-label="Buka website AionesDocu"
                  className="group relative flex flex-col justify-between bg-white/8 hover:bg-white/14 border border-white/14 rounded-[18px] p-[18px] backdrop-blur-[12px] transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[12px] font-semibold text-white tracking-[0.08em] uppercase">
                        03 · DOCU
                      </span>
                      <span className="text-[12px] font-medium text-white group-hover:translate-x-0.5 flex items-center gap-1 transition-all duration-150">
                        <span>Buka</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform duration-150" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                    </div>

                    {/* Document lines simulation */}
                    <div className="bg-white/5 p-3 rounded-[12px] border border-white/10 space-y-2 mb-3">
                      <div className="h-2 bg-white rounded-full w-[60%]" />
                      <div className="h-1.5 bg-white/60 rounded-full w-[95%]" />
                      <div className="h-1.5 bg-white/60 rounded-full w-[80%]" />
                      <div className="h-1.5 bg-white/60 rounded-full w-[70%]" />
                      <div className="h-1.5 bg-white rounded-full w-[45%]" />
                    </div>
                  </div>

                  {/* Chips: Laporan, Slide, Chat */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    <span className="px-[10px] py-0.5 rounded-full text-[11px] font-medium bg-white/12 text-white">
                      Laporan
                    </span>
                    <span className="px-[10px] py-0.5 rounded-full text-[11px] font-medium bg-white/12 text-white">
                      Slide
                    </span>
                    <span className="px-[10px] py-0.5 rounded-full text-[11px] font-medium bg-white/12 text-white">
                      Chat
                    </span>
                  </div>
                </a>

                {/* 04 · BOARD */}
                <a
                  href={SERVICE_URLS.board}
                  aria-label="Buka website AionesBoard"
                  className="group relative flex flex-col justify-between bg-white/8 hover:bg-white/14 border border-white/14 rounded-[18px] p-[18px] backdrop-blur-[12px] transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[12px] font-semibold text-white tracking-[0.08em] uppercase">
                        04 · BOARD
                      </span>
                      <span className="text-[12px] font-medium text-white group-hover:translate-x-0.5 flex items-center gap-1 transition-all duration-150">
                        <span>Buka</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform duration-150" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                    </div>

                    <div className="text-[12px] font-medium text-white mb-2">
                      Ringkasan untuk Direksi
                    </div>

                    {/* Mini Bar Chart: 72px chart area */}
                    <div className="h-[72px] flex items-end gap-2 px-2.5 bg-white/5 rounded-[12px] border border-white/10 py-2 mb-2">
                      <div className="flex-1 bg-white/60 rounded-t-sm h-[45%]" />
                      <div className="flex-1 bg-white rounded-t-sm h-[75%]" />
                      <div className="flex-1 bg-white/60 rounded-t-sm h-[60%]" />
                      <div className="flex-1 bg-white rounded-t-sm h-[95%]" />
                      <div className="flex-1 bg-white/80 rounded-t-sm h-[80%]" />
                    </div>
                  </div>

                  <div className="text-[11px] font-medium text-white/90 pt-1 border-t border-white/10">
                    Indikator Real-time
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
