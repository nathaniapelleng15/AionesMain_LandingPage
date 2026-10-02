import React from "react";
import { ArrowUpRight } from "lucide-react";
import { AionesLogo } from "./AionesLogo.tsx";
import { SERVICE_URLS, CONTACT_INFO } from "../data/content.ts";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#2a1570] text-white">
      {/* 2px Gradient Top Border Line */}
      <div className="h-[2px] w-full bg-grad-brand" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-[56px] pb-[28px]">
        {/* Main 4-column grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-10 pb-8 border-b border-[#dbffff]/15">
          {/* Col 1: Brand & Overview (Cols 1–4) */}
          <div className="col-span-12 min-[960px]:col-span-4">
            <a
              href="#top"
              className="inline-block mb-3 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none rounded-full"
            >
              <AionesLogo variant="white" />
            </a>
            <p className="text-[14px] text-white/75 leading-[1.6] font-normal max-w-[320px]">
              Ekosistem AI untuk Badan Usaha Milik Daerah.
            </p>
          </div>

          {/* Col 2: Layanan (Cols 5–7) */}
          <div className="col-span-12 sm:col-span-4 min-[960px]:col-span-3">
            <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#dbffff] mb-3">
              Layanan
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={SERVICE_URLS.care}
                  className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-white/80 hover:text-white hover:translate-x-1 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#89f5e7] focus-visible:outline-none rounded-sm"
                >
                  <span>Aiones<span className="text-[#89f5e7]">Care</span></span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#89f5e7] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SERVICE_URLS.content}
                  className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-white/80 hover:text-white hover:translate-x-1 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none rounded-sm"
                >
                  <span>AionesContent</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#dbffff] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SERVICE_URLS.docu}
                  className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-white/80 hover:text-white hover:translate-x-1 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none rounded-sm"
                >
                  <span>AionesDocu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#dbffff] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SERVICE_URLS.board}
                  className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-white/80 hover:text-white hover:translate-x-1 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none rounded-sm"
                >
                  <span>AionesBoard</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#dbffff] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Jelajahi (Cols 8–9) */}
          <div className="col-span-12 sm:col-span-4 min-[960px]:col-span-2">
            <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#dbffff] mb-3">
              Jelajahi
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#cara-kerja"
                  className="inline-block text-[14px] font-medium text-white/80 hover:text-white hover:translate-x-1 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none rounded-sm"
                >
                  Cara Kerja
                </a>
              </li>
              <li>
                <a
                  href="#keamanan"
                  className="inline-block text-[14px] font-medium text-white/80 hover:text-white hover:translate-x-1 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none rounded-sm"
                >
                  Keamanan Data
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-block text-[14px] font-medium text-white/80 hover:text-white hover:translate-x-1 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none rounded-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact (Cols 10–12) */}
          <div className="col-span-12 sm:col-span-4 min-[960px]:col-span-3">
            <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#dbffff] mb-3">
              Contact
            </div>
            <ul className="space-y-2 text-[14px] text-white/75 font-normal">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="leading-relaxed">{CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and domain */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[13px] text-white/60">
          <div>© 2026 AIONES. Seluruh hak dilindungi.</div>
          <div className="text-[#dbffff] font-semibold">
            aiones.com
          </div>
        </div>
      </div>
    </footer>
  );
};
