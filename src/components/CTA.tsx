import React from "react";
import { Mail } from "lucide-react";
import { Reveal } from "./Reveal.tsx";
import { CtaButton } from "./CtaButton.tsx";

export const CTA: React.FC = () => {
  return (
    <section
      id="demo"
      className="py-12 sm:py-14 md:py-[72px] bg-white"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
        <Reveal>
          <div className="bg-grad-deep rounded-[24px] p-8 sm:p-10 md:p-12 text-center relative overflow-hidden shadow-apple-showcase border border-white/10">
            {/* One Soft Aurora in Panel */}
            <div
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#017cc3]/35 blur-[70px] pointer-events-none select-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-[680px] mx-auto">
              <h2
                id="cta-heading"
                className="text-[24px] sm:text-[28px] md:text-[30px] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-3"
              >
                Belum yakin mulai dari layanan mana?
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#dbffff] leading-[1.6] font-normal mb-8 max-w-[560px] mx-auto">
                Ceritakan kebutuhan unit Anda; kami bantu memilih layanan AIONES yang paling tepat sebagai langkah pertama.
              </p>

              {/* Action Buttons: Full-width on mobile */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <CtaButton
                  variant="onDark"
                  size="lg"
                  href="#contact"
                  onClick={() => window.dispatchEvent(new CustomEvent("set-contact-reason", { detail: "Jadwalkan demo" }))}
                  showArrow={false}
                  className="w-full sm:w-auto h-[46px] min-h-[46px] px-6 text-[15px]"
                >
                  Jadwalkan Demo
                </CtaButton>

                <CtaButton
                  variant="outlineOnDark"
                  size="lg"
                  href="#contact"
                  onClick={() => window.dispatchEvent(new CustomEvent("set-contact-reason", { detail: "Tanya layanan" }))}
                  icon={<Mail className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />}
                  className="w-full sm:w-auto h-[46px] min-h-[46px] px-6 text-[15px]"
                >
                  Hubungi Tim
                </CtaButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

