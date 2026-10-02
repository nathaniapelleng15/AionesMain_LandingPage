import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  PenLine,
  FileText,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { AionesLogo } from "./AionesLogo.tsx";
import { SERVICES_DATA } from "../data/content.ts";
import { CtaButton } from "./CtaButton.tsx";

export const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Scroll detection for shadow and scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      const sections = ["layanan", "cara-kerja", "keamanan", "contact", "kontak"];
      const scrollPosition = window.scrollY + 120;

      let current = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = sectionId === "kontak" ? "contact" : sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "care":
        return <MessageCircle className="w-4 h-4 text-white" strokeWidth={1.75} aria-hidden="true" />;
      case "content":
        return <PenLine className="w-4 h-4 text-white" strokeWidth={1.75} aria-hidden="true" />;
      case "docu":
        return <FileText className="w-4 h-4 text-white" strokeWidth={1.75} aria-hidden="true" />;
      case "board":
        return <BarChart3 className="w-4 h-4 text-white" strokeWidth={1.75} aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: `
          linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(0, 0, 0, 0.16) 100%),
          linear-gradient(90deg, rgba(18, 9, 52, 0.88) 0%, rgba(28, 14, 78, 0.86) 55%, rgba(34, 16, 88, 0.84) 80%, rgba(1, 98, 155, 0.36) 100%)
        `,
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderBottom: "1px solid rgba(219, 255, 255, 0.11)",
        boxShadow: isScrolled
          ? "inset 0 1px 0 0 rgba(255, 255, 255, 0.16), 0 8px 24px rgba(18, 9, 52, 0.28)"
          : "inset 0 1px 0 0 rgba(255, 255, 255, 0.14)",
      }}
    >
      <nav
        aria-label="Navigasi Utama"
        className="max-w-[1200px] mx-auto px-5 sm:px-6 h-[60px] flex items-center justify-between"
      >
        {/* Brand Logo - White Variant */}
        <a
          href="#top"
          className="focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none rounded-full p-1"
          aria-label="AIONES Beranda"
        >
          <AionesLogo variant="white" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden min-[960px]:flex items-center gap-[28px]">
          {/* Layanan Dropdown with Scroll-spy indicator */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              ref={triggerRef}
              type="button"
              className={`relative inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[14px] font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none ${
                activeSection === "layanan"
                  ? "text-white"
                  : "text-white/85 hover:text-white hover:bg-white/8"
              }`}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsServicesOpen((prev) => !prev);
                }
              }}
            >
              <span>Layanan</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180 text-white" : "text-white/60"
                }`}
                strokeWidth={1.75}
                aria-hidden="true"
              />
              {activeSection === "layanan" && (
                <span
                  className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#dbffff] rounded-full"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* Dropdown Panel: White, radius 20px, w-[520px] */}
            {isServicesOpen && (
              <div
                role="menu"
                aria-orientation="vertical"
                className="absolute top-full left-0 w-[520px] bg-white rounded-[20px] border border-[#e6e3f1] p-3 mt-2 shadow-apple-dropdown animate-in fade-in zoom-in-[0.98] duration-200 grid grid-cols-2 gap-2"
              >
                {SERVICES_DATA.map((service) => {
                  const isCare = service.id === "care";
                  return (
                    <a
                      key={service.id}
                      href={service.url}
                      role="menuitem"
                      className="p-3 rounded-[14px] hover:bg-[#eef0f7] transition-all duration-150 flex items-start justify-between group focus-visible:ring-2 focus-visible:ring-[#017cc3] focus-visible:outline-none"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="flex items-start gap-2.5">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-xs mt-0.5 ${
                            isCare ? "bg-[#257c1b]" : "bg-grad-brand"
                          }`}
                        >
                          {getServiceIcon(service.id)}
                        </div>
                        <div>
                          <div className="text-[14px] font-semibold text-[#2a1570] group-hover:text-[#017cc3] transition-colors leading-tight">
                            {service.brandPrefix}
                            <span className={isCare ? "text-[#257c1b]" : "text-[#017cc3]"}>
                              {service.brandName}
                            </span>
                          </div>
                          <p className="text-[12px] text-[#4a4566] leading-snug line-clamp-2 mt-0.5">
                            {service.navDescription}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight
                        className="w-3.5 h-3.5 text-[#8a84a8] group-hover:text-[#017cc3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0 mt-0.5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Cara Kerja */}
          <a
            href="#cara-kerja"
            className={`relative px-3 py-1.5 rounded-full text-[14px] font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none ${
              activeSection === "cara-kerja"
                ? "text-white"
                : "text-white/85 hover:text-white hover:bg-white/8"
            }`}
          >
            <span>Cara Kerja</span>
            {activeSection === "cara-kerja" && (
              <span
                className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#dbffff] rounded-full"
                aria-hidden="true"
              />
            )}
          </a>

          {/* Keamanan Data */}
          <a
            href="#keamanan"
            className={`relative px-3 py-1.5 rounded-full text-[14px] font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none ${
              activeSection === "keamanan"
                ? "text-white"
                : "text-white/85 hover:text-white hover:bg-white/8"
            }`}
          >
            <span>Keamanan Data</span>
            {activeSection === "keamanan" && (
              <span
                className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#dbffff] rounded-full"
                aria-hidden="true"
              />
            )}
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className={`relative px-3 py-1.5 rounded-full text-[14px] font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none ${
              activeSection === "contact" || activeSection === "kontak"
                ? "text-white"
                : "text-white/85 hover:text-white hover:bg-white/8"
            }`}
          >
            <span>Contact</span>
            {(activeSection === "contact" || activeSection === "kontak") && (
              <span
                className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#dbffff] rounded-full"
                aria-hidden="true"
              />
            )}
          </a>
        </div>

        {/* Right Action: CtaButton Primary Variant (38px height, 18px padding, 14px font) */}
        <div className="hidden min-[960px]:flex items-center">
          <CtaButton
            variant="primary"
            size="md"
            href="#contact"
            onClick={() => window.dispatchEvent(new CustomEvent("set-contact-reason", { detail: "Jadwalkan demo" }))}
            showArrow={false}
            className="h-[38px] min-h-[38px] px-[18px] text-[14px]"
          >
            Jadwalkan Demo
          </CtaButton>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex min-[960px]:hidden items-center">
          <button
            type="button"
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-full text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#dbffff] focus-visible:outline-none"
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Sheet: solid linear-gradient(180deg, #1d0f50 0%, #2a1570 100%) */}
      {isMobileMenuOpen && (
        <div
          className="min-[960px]:hidden fixed inset-x-0 top-[60px] bottom-0 z-50 p-4 sm:p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-4 duration-300"
          style={{
            background: "linear-gradient(180deg, #1d0f50 0%, #2a1570 100%)",
          }}
        >
          <div className="space-y-5 sm:space-y-6 pt-2 sm:pt-4">
            <div className="text-[11px] sm:text-[12px] uppercase tracking-[0.08em] text-[#dbffff]/70 font-semibold">
              Empat Layanan AIONES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {SERVICES_DATA.map((service) => {
                const isCare = service.id === "care";
                return (
                  <a
                    key={service.id}
                    href={service.url}
                    className="flex items-center justify-between p-3 sm:p-3.5 rounded-[14px] sm:rounded-[16px] bg-white/8 hover:bg-white/12 border border-white/10 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 ${
                          isCare ? "bg-[#257c1b]" : "bg-grad-brand"
                        }`}
                      >
                        {getServiceIcon(service.id)}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-[15px] sm:text-[16px]">
                          {service.brandPrefix}
                          <span className={isCare ? "text-[#d4f5a3]" : "text-[#dbffff]"}>
                            {service.brandName}
                          </span>
                        </div>
                        <div className="text-[11px] sm:text-[12px] text-white/70 line-clamp-1">
                          {service.navDescription}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 ${isCare ? "text-[#d4f5a3]" : "text-[#dbffff]"}`}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>

            <div className="pt-4 sm:pt-6 border-t border-white/10 space-y-3 sm:space-y-4">
              <a
                href="#cara-kerja"
                className={`block text-[22px] sm:text-[28px] font-bold tracking-tight transition-colors ${
                  activeSection === "cara-kerja" ? "text-[#dbffff]" : "text-white hover:text-[#dbffff]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cara Kerja
              </a>
              <a
                href="#keamanan"
                className={`block text-[22px] sm:text-[28px] font-bold tracking-tight transition-colors ${
                  activeSection === "keamanan" ? "text-[#dbffff]" : "text-white hover:text-[#dbffff]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Keamanan Data
              </a>
              <a
                href="#contact"
                className={`block text-[22px] sm:text-[28px] font-bold tracking-tight transition-colors ${
                  activeSection === "contact" || activeSection === "kontak" ? "text-[#dbffff]" : "text-white hover:text-[#dbffff]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>

          <div className="pt-4 sm:pt-6">
            <CtaButton
              variant="primary"
              size="lg"
              href="#contact"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent("set-contact-reason", { detail: "Jadwalkan demo" }));
              }}
              showArrow={false}
              className="w-full text-center"
            >
              Jadwalkan Demo
            </CtaButton>
          </div>
        </div>
      )}
    </header>
  );
};
